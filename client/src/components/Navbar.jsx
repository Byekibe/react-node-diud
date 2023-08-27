import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [hovered, setIsHovered] = useState(false);

    const DisplayLogo = hovered ? <img style={{ height: "40px", width: "160px", marginLeft: "-10px"}} src={logo} alt="logo" /> : "Diet&Nutrition"
    return (
        <div className="container">
        <nav className="navbar fixed-top bg-body-tertiary navbar-expand-lg mb-5">
            <div className="container container-navbar">
                <Link 
                    className='navbar-brand ms-2' 
                    to="/"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div style={{ maxHeight: "30px"}}>
                    {DisplayLogo}
                    </div>
                </Link>
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><GiHamburgerMenu style={{ color: "#66af6b" }} /></span>
                </div>
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
                    <Link className='nav-link' to="/">Pierre</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/login">Log in</Link>
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
        </div>
    );
};

export default Navbar;