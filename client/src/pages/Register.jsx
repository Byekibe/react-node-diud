import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [err, setErr] = useState(null);
    const serverAddress = "http://localhost:7007";
    const navigate = useNavigate();
    
    const url = `${serverAddress}/api/auth/register`
    const inputs = {
        "email": email,
        "password": password,
        "username": username
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, inputs);
            navigate("/login")
        } catch (err) {
            setErr(err.response.data)
        }

        console.log(email, password, username);

        setEmail("");
        setPassword("");
        setUsername("")
    };

    return (
        <div className="container container-register">
            <div className="form-register">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingUsername" 
                        name="username"
                        placeholder="pierre"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <label htmlFor="floatingUsername">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingMail" 
                        placeholder="name@example.com"
                        name="mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <label htmlFor="floatingMail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="btn-signup">
                    <button>Sign Up</button>
                    {err && <p className="text-danger">{err}</p>}
                </div>
            </form>
            <div className="login">
                <p>Have an account? <Link to="/login">Log in</Link></p>
            </div>
            </div>
        </div>
    );
};


export default Register;