import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connectDB.js';
import router from './Routes/userRoutes.js';
import blogRouter from './Routes/blogRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config();

connectDB();

const app = express();


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's domain
    credentials: true,
}));

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use('/api/users',router);

app.use('/api/blogs',blogRouter);

app.use((req,res,next)=>{
    res.status(400).json({message:'Page Not Found'});
    res.end();
})

app.listen(process.env.PORT,()=>console.log(`Server started on port: ${process.env.PORT}`))