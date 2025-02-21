import express from "express";
import { connectDB } from "./config/Db.js";
import 'dotenv/config';
import userrouter from "./router/router.js";
import cors from 'cors';
const PORT = process.env.PORT || 6901;
connectDB();
const app = express();
app.use(express.json());
app.use(cors())

app.use('/user', userrouter)
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('server started ' + PORT);
  });
});