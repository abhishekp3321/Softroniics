import { connectDB } from "../Task/config/db.js";
import express from "express";
import TaskRouter from "./router/TaskRouter.js";
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors())

connectDB();

app.use('/task',TaskRouter)

app.listen(9000, () => {
  console.log("running on 9000")
});
