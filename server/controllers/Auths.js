import { db } from "../db.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = (req, res) => {
    
    // Check if user exists
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        // Hash the password from frontend
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`)VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
    return res.status(200).json("User has been created.")
        })
    })
};

const login = (req, res) => {
    // Check if the user exists
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        // Check password 
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if (!isPasswordCorrect) return res.status(400).json("Wrong Username or password!")

        const token = jwt.sign({ id: data[0].id}, "jwtsecretkey", { expiresIn: "20m" } );
        const { password, ...others } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others)
    })
};

const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).json("User has been logged out")
};

export { register, login, logout };