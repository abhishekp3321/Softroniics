// const user =require('../models/user.js')

import user from "../models/user.js";
import bcrypt from "bcrypt"
import 'dotenv/config';
import jwt from 'jsonwebtoken'
export async function initial(req, res) {
  res.send("Hello World");
}

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "please fill all the fields" });
    }
    let existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "user already exists" });
    }
    const SALT = parseInt(process.env.SALT) || 10
    const hashedPass = await bcrypt.hash(password, SALT);

    await user.create({ name, email, password :hashedPass});
    return res.status(201).json({ message: "user created" });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'server error',error:error });
  }
}
export const login =async (req,res)=>{
  try {
    const { email, password } = req.body;
    if(!email || !password){
      return res.status(400).json({message:'please fill all the fields'})
    }
    let alreadyUser = await user .findOne({ email })
    if(!alreadyUser){
      return res.status(404).json({message:'user not found'})
    }
    const vaildPass= await bcrypt.compare(password,alreadyUser.password)
    if(!vaildPass){
      return res.status(401).json({message:'invalid password'})
    }
    const token=jwt.sign({userId:alreadyUser._id,email:alreadyUser.email},process.env.KEY,{expiresIn:'1h'})
    return res.status(200).json({message:'login success',token})

  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'server error',error:error });
  }
}
