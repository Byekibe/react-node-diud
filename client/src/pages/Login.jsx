import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const options = {
        "username": username,
        "password": password
    }

    // const url = "http://localhost:7007/api/auth/login"

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axios.post(url, options);
           await login(options)
            navigate("/");
        } catch (err) {
            setErr(err);
            console.log(err)
        }

        setUsername("");
        setPassword("");
    }

    return (
        <div className="container container-login">
            <div className="form-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="form-log">
                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="floatingName" 
                            placeholder="pierre"
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingName">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password"
                            value={password} 
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="login-btn mb-3">
                        <button>Log in</button>
                    </div>
                    <p className="text-center text-danger">{err && err.response?.data}</p>
                </form>
                <div className="register">
                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;