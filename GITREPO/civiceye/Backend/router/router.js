import express from 'express';
import { admin, deleteuser, signin, signup, update  } from '../controller/controller.js';
const userrouter = express.Router();

userrouter.post('/signup', signup)
userrouter.post('/signin', signin )
userrouter.put('/update/:id', update)
userrouter.delete('/delete/:id', deleteuser)
userrouter.get('/admin/:id',admin)
export default userrouter