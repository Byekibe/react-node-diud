import { Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs'

const Err = () => {
    return (
        <div className="container">
            <h3>Error 404 | Page not found</h3>
            <div className="go-home">
                <Link className="links" to="/"><BsArrowLeft />Go Home</Link>
            </div>
        </div>
    );
};

export default Err;