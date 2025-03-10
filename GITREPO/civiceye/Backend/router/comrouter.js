import express from 'express';
import { fileupload } from '../multer.js';
import { getComplaints, registerComplaint } from '../controller/complaintcon.js';

const comrouter = express.Router();
comrouter.post('/add',fileupload.single("proof"),registerComplaint);
comrouter.get('/get/:id',getComplaints);
export default comrouter;