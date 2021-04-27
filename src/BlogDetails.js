import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
   
   const {id} = useParams()
   const {data: blog, pending, error} = useFetch("http://localhost:8000/blogs/"+id);
   const history = useHistory();

   const handleClick = () =>{
    fetch("http://localhost:8000/blogs/"+id, {
        method: 'DELETE'
    }).then(()=>{
        history.push('/')
    })
   }
   
    return (  
        <div className="blog-Details">
            {pending && <div>Content Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                </article>)}
                <button onClick = {handleClick}>Delete Post</button>
        </div>
    );
}
 
export default BlogDetails;