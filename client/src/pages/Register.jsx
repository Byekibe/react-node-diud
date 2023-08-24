import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password);

        setEmail("");
        setPassword("");
    };

    return (
        <div className="container-register">
            <div className="form-register">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="form">
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
                <div className="btn-signup">
                    <button>Sign Up</button>
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