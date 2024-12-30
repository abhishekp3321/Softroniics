import express from 'express';
import { initial } from '../controlller/Authcontrol';
const router = express.Router();
router.route('/initial').get(initial)
module.exports=router
