import React from 'react'
import task from '../models/Task.js'

const add = async (req, res) => {
    let newtask = new task (req.body);
    let response = await newtask.save();
    res.json(response);
    }
export { add }
