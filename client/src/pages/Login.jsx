import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password)
    }

    return (
        <div className="container-login">
            <div className="form-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="form-log">
                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password"
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="login-btn mb-3">
                        <button>Log in</button>
                    </div>
                </form>
                <div className="register">
                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;