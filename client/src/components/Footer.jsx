import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 footer-logo">
                    <Link className="links" to="/">Diet&Nutrition</Link>
                    <div className="copyright">
                        &copy; 2023 <Link className="links" to="/">Diud. All Rights Reserved</Link>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 items-right">
                    <Link className="links contact" to="/contact">Contact Us</Link>
                    <Link className="links" to="/privacy">Privacy Statement</Link>
                    <Link className="links" to="/hire">We are hiring!</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;