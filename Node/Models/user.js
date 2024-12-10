import mongoose from "mongoose";

let userscheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
   
})

const user=mongoose.model("user",userscheme)
export default user