import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const {data: blogs, pending, error} = useFetch("http://localhost:8000/blogs");

    return (  
        <div className = "home">
            {error && <div>{error}</div>}
            {pending && <div>Loading the Details</div>}   {/* conditional loading message during fetching data */}
            {blogs && <BlogList blogs = {blogs} title = "Blogs"/>}
        </div>
    );
}
 
export default Home;