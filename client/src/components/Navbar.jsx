import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { useState } from 'react';

const Navbar = () => {
    const [hovered, setIsHovered] = useState(true);

    const DisplayLogo = hovered ? <img style={{ height: "40px", width: "160px"}} src={logo} alt="logo" /> : "Diet&Nutrition"
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container container-navbar">
                <Link 
                    className='navbar-brand' 
                    to="/"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {DisplayLogo}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=food">Food</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=diet">Diet</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=nutrition">Nutrition</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=exercise">Exercise</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=health">Pierre</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/?cat=health">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <div className="nav-item-write">
                            <Link className='nav-link' to="/write">Write</Link>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;