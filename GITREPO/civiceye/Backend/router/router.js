import express from 'express';
import { signin, signup,  } from '../controller/controller.js';
const userrouter = express.Router();

userrouter.post('/signup', signup)
userrouter.post('/signin', signin )
export default userrouter