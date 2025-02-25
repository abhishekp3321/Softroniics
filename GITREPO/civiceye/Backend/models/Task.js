import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   address: {
        type: String,
        required: true
    },
   
    
})
const task = mongoose.model('task', taskSchema)
export default task;