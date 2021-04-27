import {Link} from 'react-router-dom';


const NoPage = () => {
    return (
        <div className="notFound">
        <h2>Sorry</h2>
            <p>Page not found.</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
      );
}
 
export default NoPage;