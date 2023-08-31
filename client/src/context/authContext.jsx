import axios from "axios";
import { createContext, useEffect, useState } from "react"

const AuthContext = createContext();
 
const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    
    const url_login = "http://localhost:7007/api/auth/login"

    const url_logout = "http://localhost:7007/api/auth/logout"

    const login = async (inputs) => {
        const res = await axios.post(url_login, inputs);
        setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        await axios.post(url_logout)
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }