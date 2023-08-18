import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container container-navbar">
                <Link className='navbar-brand' to="/">Diet&Nutrition</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className='nav-link' to="/">Food</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/">Diet</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/">Nutrition</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/">Exercise</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/">Health</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;