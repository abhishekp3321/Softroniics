import { add, deletea, login, update, uploadd, view, viewprofile } from "../cotroller/uercontroller.js"
import express from 'express'
import user from "../Models/user.js"
import { fileupload } from "../Multer.js"

const userRouter=express.Router()

userRouter.post('/add',add)
userRouter.get('/view',view)
userRouter.put('/update/:id',update)
userRouter.delete('/delete/:id',deletea)
userRouter.post('/login',login)
userRouter.get('/viewprofile/:id',viewprofile)
userRouter.post('/upload',fileupload.single("image"),uploadd)
export default userRouter