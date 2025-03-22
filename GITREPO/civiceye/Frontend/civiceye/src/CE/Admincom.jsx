import React, { useState, useEffect } from "react";
import celogofull from '../assets/celogofull.png';
import logout from '../assets/logout.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const Admincom = () => {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [updatedata, setupdatedata] = useState({ status: "" });
    const userid = localStorage.getItem("id");
    const [loading, setLoading] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);

    useEffect(() => {
        const fetchComplaints = async () => {
            setLoading(true);
            if (!userid) {
                console.error("No user ID found");
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`http://127.0.0.1:6262/proof/getall/${userid}`);
                setComplaints(response.data);
            } catch (error) {
                console.error("Error fetching complaints:", error.response?.data || error.message);
                setComplaints([]);
                toast.error("Failed to fetch complaints.");
            } finally {
                setLoading(false);
            }
        };
        fetchComplaints();
    }, [userid]);

    const filteredComplaints = filterStatus === "all" ? complaints : complaints.filter(com => com.status === filterStatus);
    const currentItems = filteredComplaints.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

    const statussubmit = async (complaintId, event) => {
        event.preventDefault();
        if (!updatedata.status) return toast.error("Please select a status!");
        setUpdateLoading(true);
        try {
            const response = await axios.put(`http://127.0.0.1:6262/proof/update/${complaintId}`, { status: updatedata.status });
            setComplaints(prev => prev.map(com => com._id === complaintId ? { ...com, status: updatedata.status } : com));
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error updating status:", error.response?.data || error.message);
            toast.error("Failed to update status.");
        } finally {
            setUpdateLoading(false);
        }
    };

    const downloadProof = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) throw new Error("Failed to fetch file");

            const blob = await response.blob();
            if (blob.type.includes("text/html")) throw new Error("Invalid file type.");
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = fileUrl.split("/").pop(); // Extract filename from URL
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading file:", error);
            toast.error("Download failed. Try again.");
        }
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 text-white">
            <aside className="bg-gray-800 w-64 p-6 flex flex-col shadow-md">
                <div className="flex justify-center mb-10">
                    <img src={celogofull} alt="Logo" className="w-48" />
                </div>
                <nav className="space-y-3 flex-grow">
                    <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700">📊 Overview</button>
                    <button className="flex items-center w-full p-3 bg-blue-500 text-white rounded-lg">⚖️ Complaints</button>
                    <button onClick={() => navigate('/admin')} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700">👤 User Management</button>
                    <button onClick={() => navigate("/feedback")} className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700">📄 Reports</button>
                </nav>
                <button onClick={() => navigate('/')} className="w-full p-3 bg-gray-700 rounded-md hover:bg-gray-600">📤 Logout</button>
            </aside>

            <main className="flex-1 p-4 md:p-8 overflow-auto">
                <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
                    <select className="p-2 border rounded-md bg-gray-700 text-white" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value="all">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                        <option value="In Progress">In Progress</option>
                    </select>
                    <button onClick={() => navigate('/')} className="flex items-center space-x-2 mt-4 md:mt-0">
                        <img src={logout} alt="Logout" className="w-8 h-8" />
                    </button>
                </div>

                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Description</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Location</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Category</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">Proof</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">Download</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">Change Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800 divide-y divide-gray-700">
                                {currentItems.map((com) => (
                                    <tr key={com._id} className="hover:bg-gray-700">
                                        <td className="px-4 py-4 text-sm text-gray-300">{new Date(com.createdAt).toLocaleDateString()}</td>
                                        <td className="px-4 py-4 text-sm text-gray-300">{com.description}</td>
                                        <td className="px-4 py-4 text-sm text-gray-300">{com.status}</td>
                                        <td className="px-4 py-4 text-sm text-gray-300">{com.location}</td>
                                        <td className="px-4 py-4 text-sm text-gray-300">{com.complaint}</td>
                                        <td className="px-4 py-4 text-center text-sm">
                                            {com.proof ? <a href={`http://127.0.0.1:6262/${com.proof}`} target="_blank" rel="noopener noreferrer">View Proof</a> : "No Proof"}
                                        </td>
                                        <td className="px-4 py-4 text-center text-sm">
                                            {com.proof ? (
                                                <button onClick={() => downloadProof(`http://127.0.0.1:6262/${com.proof}`)} className="inline-flex justify-center items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" disabled={!com.proof}>
                                                    Download
                                                </button>
                                            ) : "No Proof"}
                                        </td>
                                        <td className="px-4 py-4 text-center text-sm">
                                            <form onSubmit={(event) => statussubmit(com._id, event)}>
                                                <select value={updatedata.status} onChange={(e) => setupdatedata({ ...updatedata, status: e.target.value })} className="border rounded p-2 bg-gray-700 text-white">
                                                    <option value="">Select Status</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Resolved">Resolved</option>
                                                    <option value="Rejected">Rejected</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="In Progress">In Progress</option>
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
                )}
                {filteredComplaints.length > itemsPerPage && (
                    <div className="flex justify-center mt-4">
                        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 mx-1 bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50">Previous</button>
                        <span>{currentPage} / {totalPages}</span>
                        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 mx-1 bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50">Next</button>
                    </div>
                )}
            </main>
        </div>
    );
};