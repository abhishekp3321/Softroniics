import mongoose from "mongoose";
import ComplaintModel from "../models/complaints.js";
import complaint from "../models/complaints.js";
import task from "../models/Task.js";

export const registerComplaint = async (req, res) => {
  try {
    const userid = req.body.userid;

    if (!userid || !mongoose.Types.ObjectId.isValid(userid)) {
      return res.status(404).json({ message: "Invalid User" });
    }


    let proof = req.file.path;
    const { description, complaint, location,
      createdAt } = req.body;
    if (!location) {
      return res.status(400).json({ message: "Location is required" });
    }

    const newComplaint = await ComplaintModel.create({
      description,
      complaint,
      location,
      proof,
      userid,
      createdAt
    });

    return res.status(200).json({ message: "Complaint Registered", newComplaint });

  } catch (error) {
    console.error("Internal Server Error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}


export const getComplaints = async (req, res) => {
  try {
    const { id } = req.params; // Get the user ID from the request parameters

    // ✅ Find complaints by `userId`
    const complaints = await ComplaintModel.find({ userid: id });
    const updatedComplaints = complaints.map((comp) => ({
      ...comp._doc,
      proof: comp.proof ? `http://127.0.0.1:6262/uploads/${comp.proof}` : null, 
    }));

    if (!complaints.length) {
      return res.status(404).json({ message: "No complaints found" });
    }

    return res.status(200).json({ complaints });
  } catch (error) {
    console.error("Error fetching complaints:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};