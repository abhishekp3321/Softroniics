import express from 'express';
import { initial, login, register } from '../controlller/Authcontrol.js';
const router = express.Router();
router.route('/initial').get(initial)
router.route('/register').post(register)
router.route('/login').post(login)
export default router
