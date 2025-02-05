import express from 'express';
import 'dotenv/config';
import authRoutes from './Routes/Auth.js';
import { connectDB } from './utilis/db.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/Auth',authRoutes)
const PORT = process.env.PORT || 5000;
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log('server started'+ PORT);
  });
}
)


