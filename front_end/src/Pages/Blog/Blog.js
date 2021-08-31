import { getBlogs, URI } from '../../Helpers'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import BlogSingle from '../../Components/BlogSingle/BlogSingle'

function Blog () {

    const [state, setState] = useState({
        loading:false,
        blogs:[],
        featured:{}
    })

    useEffect(() => {
        setState(prevState => ({ ...prevState, loading:true }))

        getBlogs()
        .then(blogs => {
            if(state.loading) {
                setState(prevState => ({ ...prevState, blogs:blogs }))
                getFeatured(blogs)
            }
        })
        .catch( err => console.error(err) ) 


        return () => setState(prevState => ({ ...prevState, loading:false }))

    },[state.loading])

    function getFeatured (items) {
        let featuredPost = items.filter( post => post.featured )[0]
        setState(prevState => ({ ...prevState, featured:featuredPost }))
    }

    return(
        <section>
            <div id="blog-featured">
                <div className="container blog-featured-bg">
                    <Link to={"/blog/" + state.featured.slug}>
                    <div className="row">
                        <div className="col-md-6">
                        <h1>{state.featured.blog_title}</h1>
                        <p>{state.featured.excerpt}</p>
                        </div>
                        <div className="col-md-6 text-center">
                            {state.featured.cover_image ? <img src={  URI + state.featured.cover_image.formats.small.url} alt={state.featured.blog_title} /> : ""}
                        </div>
                    </div>
                    </Link>
                </div>
            </div> 
            <div id="blog-main">
        <div className="container">
            <div className="row">
            {state.blogs.map(blog => <BlogSingle blog={blog} key={blog.id} URI={URI}/> )}
            </div>
        </div>

            </div>
            </section>
    )
}

export default Blog