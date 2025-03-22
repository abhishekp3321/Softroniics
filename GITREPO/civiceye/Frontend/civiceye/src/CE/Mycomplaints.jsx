import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import celogofullpng from "../assets/celogofull.png";
import logout from '../assets/logout.png';

const MyComplaints = () => {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState([]);
    const userid = localStorage.getItem("id");

    console.log("User ID from localStorage:", userid);

    useEffect(() => {
        const fetchComplaints = async () => {
            if (!userid) {
                console.error("No user ID found");
                return;
            }

            try {
                const response = await axios.get(`http://127.0.0.1:6262/proof/get/${userid}`);
                console.log("API Response:", response.data);
                setComplaints(response.data.complaints);
            } catch (error) {
                console.error("Error fetching complaints:", error.response?.data || error.message);
            }
        };
        fetchComplaints();
    }, [userid]);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-8 md:px-6 md:py-10">
            <div className="flex flex-col items-center mb-8">
                <img src={celogofullpng} alt="Civic Eye Logo" className="w-20 md:w-24 mb-6 drop-shadow-sm" />
                <h1 className="text-3xl md:text-4xl font-bold text-center">Your Complaints</h1>
                <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
            </div>
            <div className="w-full max-w-6xl">
                <div className="bg-gray-800 shadow-md rounded-xl mb-6 p-4 flex justify-between items-center">
                    <button
                        onClick={() => navigate('/complaint')}
                        className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Submit New Complaint
                    </button>
                    <button className="flex cursor-pointer items-center space-x-2" onClick={() => navigate('/reghome')}>
                        <img src={logout} alt="Logout" className="w-8 h-8" />
                    </button>
                </div>
                <div className="bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-700">
                    {complaints.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 px-4">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No complaints found</h3>
                            <p className="text-gray-500 text-center">You haven't submitted any complaints yet.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-700 text-gray-300 text-sm uppercase tracking-wider border-b border-gray-600">
                                        <th className="px-6 py-3 font-medium">Description</th>
                                        <th className="px-6 py-3 font-medium">Category</th>
                                        <th className="px-6 py-3 font-medium">Proof</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Location</th>
                                        <th className="px-6 py-3 font-medium">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-600">
                                    {complaints.map((com) => (
                                        <tr key={com._id} className="hover:bg-gray-700 transition duration-150">
                                            <td className="px-5 py-4 font-medium">{com.description}</td>
                                            <td className="px-5 py-4 text-gray-400">{com.complaint}</td>
                                            <td className="px-5 py-4 font-medium">
                                                {com.proof ? (
                                                    <a href={`http://127.0.0.1:6262/${com.proof}`} target="_blank" rel="noopener noreferrer">
                                                        <button className="px-2 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm">
                                                            View Proof
                                                        </button>
                                                    </a>
                                                ) : ('No Proof')}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300">{com.status}</span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400">{com.location}</td>
                                            <td className="px-6 py-4 text-gray-500">{new Date(com.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyComplaints;