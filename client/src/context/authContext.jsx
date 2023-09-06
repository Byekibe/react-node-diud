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
        const res = await axios.post(url_login, inputs, {
            method: "POST",
            credentials: "include",
            withCredentials: true,
        });
        setCurrentUser(res.data)
    }

    const logout = async () => {
        await axios.get(url_logout, {
            method: "GET", 
            withCredentials: true,
            credentials: 'include'        
        })
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