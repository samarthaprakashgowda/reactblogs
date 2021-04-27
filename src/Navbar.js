import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Cat Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style = {{
                    backgroundColor: 'silver' 
                }}> Add New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;