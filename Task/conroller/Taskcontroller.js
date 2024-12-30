import task from "../models/Task.js";

const add = async (req, res) => {
  try {
    let newtask = new task(req.body);
    let response = await newtask.save();
    res.json(response);
    console.log(response);
  } catch (e) {
    console.error(e);
  }

};
const login = async (req,res)=>{
  const { email, password } = req.body;

  try {
    let tasks = await task.findOne({ email: email });
    if (!tasks) {
      console.log("user not found");
      return res.status(404).json({ message: "user not found" });
    }
    if (tasks.password === password) {
      console.log("login succesful");
      return res.json(tasks);
    } else {
      console.log("invaild password");
      return res.status(401).json({ message: "invaild password" });
    }
  } catch (error) {
    console.log("error during login:", error);
    return res.status(500).json({ message: "an error occurred during login" });
  }
}
const view = async (req, res) => {
  try {
    let response = await task.find();
    res.json(response);
  } catch (error) {
    console.error(error);
  }
};
const dele =async(req,res)=>{
  let id=req.params.id;
  let response=await task.findByIdAndDelete(id);
  res.json(response);
}
const register = async (req, res) => {
  try {
    let HASHpassword = await bcrpt.hash(req.body.password, 10);
    console.log(HASHpassword);
    let newtask = new task(req.body);
    newtask.password = HASHpassword;
    let response = await newtask.save();
    res.json(response);
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
};
export { add,login,view,dele,register };
