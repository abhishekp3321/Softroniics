import express from 'express'

import { add, dele, login, register } from '../conroller/Taskcontroller.js'
import { view } from '../../Node/cotroller/uercontroller.js'

const TaskRouter=express.Router()

TaskRouter.post('/add',add)
TaskRouter.post('/login',login)
TaskRouter.get('/view',view)
TaskRouter.delete('/delete/:id',dele)
TaskRouter.post('/register',register)

export default TaskRouter