import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import connectDb from './config/db.js';
dotenv.config();
const PORT= process.env.PORT||5000;
const app = express();
connectDb();
app.use(express.json());
app.use("/api/auth",authRoute);
app.listen(PORT,()=>{
    console.log(`Auth Service is running at ${PORT} `);
});



