import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="container">
            {currentUser?.username? (<div>Meet {`${currentUser?.username}`}  a food nutritionist</div>) : "Please login to see author"}
            <Link to="/">Home</Link>
        </div>
    );
};

export default Profile;