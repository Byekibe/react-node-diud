import Navbar from '../components/Navbar.jsx';
import HomeContent from '../components/HomeContent.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
    
    return (
        <>
            <Navbar />
            <div className="container">
                <HomeContent />
            </div>
            <Footer />
        </>
    );
};

export default Home;