import express from 'express';
import { signin, signup, update  } from '../controller/controller.js';
const userrouter = express.Router();

userrouter.post('/signup', signup)
userrouter.post('/signin', signin )
userrouter.put('/update/:id', update)
export default userrouter