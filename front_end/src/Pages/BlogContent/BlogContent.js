import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getBlogs, URI } from '../../Helpers'

import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment';

function BlogContent () {

    const [ state, setState ] = useState({
        loading:false,
        post:{},
        slug:useParams().slug
    })

    useEffect(() => {
        setState(prevState => ({ ...prevState, loading:true }))
        getBlogs()
        .then( posts => {
            if(state.loading) {
               let post = posts.filter( item => item.slug === state.slug)[0]
               setState(prevState => ({ ...prevState, post:post }))
            }
        } )
        .catch( err => console.error(err))

        return () => setState(prevState => ({ ...prevState, loading:false }))

    },[
        state.loading,
        state.slug
    ])

const updated = new Date(state.post.updated_at)

console.log(updated)

    return(
        <div id="blog-content">
            <div className="container text-center">
            { state.post.cover_image ? <img src={URI + state.post.cover_image.url} alt={state.post.title} /> : ""}
            <h1 className="my-4">{state.post.blog_title}</h1>
            <h5><Moment format="MMM YYYY" >{state.post.updated_at}</Moment></h5>
           <div className="pb-5">
           <ReactMarkdown children={state.post.blog_content} />
           </div>
           <div className="pb-5">
           <h4>{state.post.category}</h4>
           </div>
            </div>
        </div>
    )
}

export default BlogContent