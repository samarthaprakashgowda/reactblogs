import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Sam');
    const [pending, setPending] = useState(false);
    const history = useHistory();

    const handleClick = (e) =>{
        e.preventDefault(); //refreshnot
        const blog = { title, body, author };
        setPending(false);
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>{
                console.log('New Added Article');
                setPending(true);
                //history.go('-2')
                history.push('/');

        })
    }

    return ( 
        <div className = "create">
            <p>Create a New Blog</p>
            <form onSubmit = {handleClick}>
                <label>
                    Blog Title: 
                </label>
                <input type="text" 
                required 
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea 
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="sam">Sam</option>
                    <option value="ram">Ram</option>
                </select>
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
                {!pending && <button> Submit Article</button>}
                { pending && <button disabled> Submit in progress.....</button>}
            </form>
        </div>
     );
}
 
export default Create;