import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo ps-3">
                    <Link className="links" to="/">Diet&Nutrition</Link>
                </div>
                <div className="copyright pe-3">
                    &copy; 2023 <Link className="links" to="/">Diud || Tills</Link> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;