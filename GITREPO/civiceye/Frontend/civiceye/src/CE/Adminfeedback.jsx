import React, { useState, useEffect } from 'react';
import celogofull from '../assets/celogofull.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Adminfeedback = () => {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState([]);
    const [update, setUpdate] = useState({ status: "" });
    const feedbackid = localStorage.getItem('id');
    const [updateLoading, setUpdateLoading] = useState(false);

    const handlechange = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value });
    };

    const handleupdate = async (id, status) => {
        setUpdateLoading(true);
        try {
            const response = await axios.put(`http://127.0.0.1:6262/feedback/update/${id}`, { status: status });
            if (response.data) {
                console.log(response.data);
                setUpdate({ status: "" });
                setFeedback(feedback.map(fb => fb._id === id ? { ...fb, status: status } : fb));
            }
        } catch (error) {
            console.error('Error updating feedback:', error);
        } finally {
            setUpdateLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:6262/feedback/get");
                if (response.data && Array.isArray(response.data.feedbacks)) {
                    setFeedback(response.data.feedbacks);
                } else {
                    console.error("Invalid feedback data:", response.data);
                    setFeedback([]);
                }
            } catch (error) {
                console.error("Error fetching feedback:", error);
                setFeedback([]);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex w-full h-screen bg-gray-900 text-white">
            <aside className="bg-gray-800 w-78 p-6 flex flex-col shadow-md">
                <div className="flex justify-center mb-10">
                    <img src={celogofull} alt="Logo" className="w-48" />
                </div>
                <nav className="space-y-3 flex-grow">
                    <button onClick={() => navigate('/')} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        📊 Overview
                    </button>
                    <button onClick={() => navigate("/admincom")} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        ⚖️ Complaints
                    </button>
                    <button onClick={() => navigate("/admin")} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        👤 User Management
                    </button>
                    <button onClick={() => navigate("/feedback")} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        📄 Reports
                    </button>
                </nav>
                <div className="mt-auto">
                    <button className="w-full p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
                        📤 Logout
                    </button>
                </div>
            </aside>

            <div className="rounded-lg w-full px-12 m-20">
                <div className="overflow-x-auto rounded-lg">
                    <table className="min-w-full bg-gray-700 rounded-lg">
                        <thead className="bg-gray-700 shadow-xl">
                            <tr>
                                <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-lg font-medium text-gray-300 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback.map((fb) => (
                                <tr key={fb._id} className="bg-gray-800">
                                    <td className="px-6 py-3 text-l text-gray-300">{fb.username}</td>
                                    <td className="px-6 py-3 text-l text-gray-300">{fb.email}</td>
                                    <td className="px-6 py-3 text-l text-gray-300">{fb.description}</td>
                                    <td className="px-6 py-3 text-l text-gray-300">{new Date(fb.timestamp).toLocaleString()}</td>
                                    <td className="px-6 py-3 text-l text-gray-300">{fb.status}</td>
                                    <td className="px-6 py-3">
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            handleupdate(fb._id, update.status);
                                        }}>
                                            <select
                                                className="bg-gray-700 text-white p-2 rounded"
                                                name="status"
                                                value={update.status}
                                                onChange={handlechange}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Resolved">Resolved</option>
                                                <option value="Rejected">Rejected</option>
                                            </select>
                                            <button type="submit" className="ml-2 px-3 py-1.5 bg-blue-600 hover:bg-gray-300 rounded-lg" disabled={updateLoading}>
                                                {updateLoading ? "Updating..." : "Submit"}
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}

export default Adminfeedback;