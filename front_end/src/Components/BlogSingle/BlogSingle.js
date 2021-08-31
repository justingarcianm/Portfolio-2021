import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown'

function BlogSingle ({ URI, blog }) {

    return (
        <div className="col-md-4">
<Link to={"/blog/" + blog.slug}>
<article className="article-card">
<img src={URI + blog.cover_image.formats.small.url} alt={blog.blog_title}/>
            <h3>{blog.blog_title}</h3>
            <h5 className="date"><Moment format="MMM YYYY">{blog.updated_at}</Moment></h5>
            <ReactMarkdown children={blog.excerpt}/>
            <h4 className="category">{blog.category}</h4>
</article>
</Link>
        </div>
    )
}

export default BlogSingle