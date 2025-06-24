import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import authRoutes from './routes/auth.js';
import viberoutes from './routes/vibes.js'
const app=express();
app.use(express.json());


const connect = async () => {
  try {
    console.log(process.env.db_url);
    const conn = await mongoose.connect(process.env.db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    process.exit(1);
  }
};
connect()

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/vibes',viberoutes);

app.listen(process.env.PORT,()=>
{
    console.log("listening at https://localhost:5010/");
})

