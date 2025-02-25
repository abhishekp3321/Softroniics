import express from 'express';
import { deleteuser, signin, signup, update  } from '../controller/controller.js';
const userrouter = express.Router();

userrouter.post('/signup', signup)
userrouter.post('/signin', signin )
userrouter.put('/update/:id', update)
userrouter.delete('/delete/:id', deleteuser)
export default userrouter