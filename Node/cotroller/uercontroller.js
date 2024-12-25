import { response } from "express";
import bcrpt from "bcrypt";
import user from "../Models/user.js";

const add = async (req, res) => {
  let newuser = new user(req.body);
  let response = await newuser.save();
  res.json(response);
};

const view = async (req, res) => {
  let response = await user.find();
  res.json(response);
};
const viewprofile = async (req, res) => {
  let id = req.params.id;
  let response = await user.findById(id);
  res.json(response);
};

const update = async (req, res) => {
  let id = req.params.id;
  let resupdate = await user.findByIdAndUpdate(id, req.body);
  res.json(resupdate);
};
const deletea = async (req, res) => {
  let id = req.params.id;
  let response = await user.findByIdAndDelete(id);
  res.json(response);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let users = await user.findOne({ email: email });
    if (!users) {
      console.log("user not found");
      return res.status(404).json({ message: "user not found" });
    }
    if (users.password === password) {
      console.log("login succesful");
      return res.json(users);
    } else {
      console.log("invaild password");
      return res.status(401).json({ message: "invaild password" });
    }
  } catch (error) {
    console.log("error during login:", error);
    return res.status(500).json({ message: "an error occurred during login" });
  }
};

const uploadd = async (req, res) => {
  try {
    console.log(req.file);
    let path = req.file.filename;
    const uploadfile = new user({ ...req.body, image: path });
    const uploadedfile = await uploadfile.save();
    res.json(uploadedfile);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const register = async (req, res) => {
  try {
    let HASHpassword = await bcrpt.hash(req.body.password, 10);
    console.log(HASHpassword);
    let newuser = new user(req.body);
    newuser.password = HASHpassword;
    let response = await newuser.save();
    res.json(response);
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
};
export { add, view, update, deletea, login, viewprofile, uploadd, register };
