import { add, deletea, update, view } from "../cotroller/uercontroller.js"
import express from 'express'
import user from "../Models/user.js"

const userRouter=express.Router()

userRouter.post('/add',add)
userRouter.get('/view',view)
userRouter.put('/update/:id',update)
userRouter.delete('/delete/:id',deletea)

export default userRouter