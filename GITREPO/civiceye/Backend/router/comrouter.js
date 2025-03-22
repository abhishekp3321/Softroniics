import express from 'express';
import { fileupload } from '../multer.js';
import {  getallcomplaints, getComplaints, registerComplaint, statusupdate } from '../controller/complaintcon.js';

const comrouter = express.Router();
comrouter.post('/add',fileupload.single("proof"),registerComplaint);
comrouter.get('/get/:id',getComplaints);
comrouter.get('/getall/:id',getallcomplaints);
comrouter.put('/update/:id',statusupdate);
export default comrouter;       