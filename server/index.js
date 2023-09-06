import express from 'express';
import postsRoutes from './routes/Posts.js';
import userRoutes from './routes/Users.js';
import authRoutes from './routes/Auths.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({ credentials:true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
const port = process.env.PORT
app.use(express.json());

app.use("/api/posts", postsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
