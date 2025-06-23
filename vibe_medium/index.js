import connect from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import viberoutes from './routes/vibes.js'

dotenv.config();

const app=express();
app.use(express.json());
connect();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/vibes',viberoutes);

app.listen(process.env.port,()=>
{
    console.log("listening at https://localhost:5010/");
})