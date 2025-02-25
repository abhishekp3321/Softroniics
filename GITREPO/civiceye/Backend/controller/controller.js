import bcrypt from "bcrypt"
import 'dotenv/config';
import jwt from 'jsonwebtoken'
import task from '../models/Task.js'

export const signup = async (req, res) => {
  try {
    const { username, number, dob, email, password } = req.body;
    if (!username || !number || !dob || !email || !password) {
      return res.status(400).json({ message: "please fill all the fields" });
    }
    let existingUser = await task.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "user already exists" });
    }
    const SALT = parseInt(process.env.SALT) || 10
    const hashedPass = await bcrypt.hash(password, SALT);
    await task.create({ username, number, dob, email, password: hashedPass });
    return res.status(201).json({ message: "user created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error', error: error });
  }
}
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'please fill all the fields' })
    }
    let User = await task.findOne({ email })
    if (!User) {
      return res.status(404).json({ message: 'user not found' })
    }
    const vaildPass = await bcrypt.compare(password, User.password)
    if (!vaildPass) {
      return res.status(401).json({ message: 'invalid password' })
    }
    const token = jwt.sign({ userId: User._id, email: User.email }, process.env.KEY, { expiresIn: '1h' })
    return res.status(200).json({ message: 'login success', token, userId: User._id })

  } catch (error) {
    console.log(error); 

    res.status(500).json({ message: 'server error', error: error });
  }
}


export const update = async (req, res) => {
  try {
    // Hash password only if it's provided
    if (req.body.password) {
      const SALT = parseInt(process.env.SALT) || 10;
      req.body.password = await bcrypt.hash(req.body.password, SALT);
    }

    // Find and update task
    const updateduser = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updateduser) {
      return res.status(404).json({ message: "user not found" });
    }

    res.json(updateduser);
  } catch (error) {
    console.log("error", error);
    
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};