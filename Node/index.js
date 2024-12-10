import express from 'express'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
connectDB()


app.use('/user',userRouter)


app.listen(8000,()=>{console.log("running");
})