import { connectDB } from "../Node/config/db.js";
import express from "express";

const app = express();

app.use(express.json);

connectDB();

app.listen(9000, () => {
  console.log("running");
});
