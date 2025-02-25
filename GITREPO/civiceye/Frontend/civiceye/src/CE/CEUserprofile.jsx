import axios from 'axios';
import React, { useState } from 'react';
import { data } from 'react-router-dom';

export const CEUserProfile = () => {
    const formDataState = {
        username: "",
        number: "",
        email: "",
        dob: "",
        password: "",
        state: "",
        address: "",
        idProof: "",
        idProofNumber: "",
    };

    const [formData, setFormData] = useState(formDataState);
const userid=localStorage.getItem('id')
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `http://127.0.0.1:6262/user/update/${userid}`,formData);
                console.log("Response:", response.data);
            console.log("User updated successfully!", response.data);
            alert("User updated successfully!");
        } catch (error) {                            
            console.error("Error updating user:", error);
            alert("Failed to update user.");
        }
    };
    
    const districts = [
        "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasargod", "Kollam",
        "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta",
        "Thiruvananthapuram", "Thrissur", "Wayanad"
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-4xl">
                <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
                    <span className="mr-2">📹</span>
                    <span className="text-gray-800">Civic</span>
                    <span className="text-blue-500">EYE</span>
                </h1>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start text-left">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                  

                    <div className="flex flex-col items-start text-left">
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            id="number"
                            name="number"
                            type="tel"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col items-start text-left">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col items-start text-left">
                        <label className="block text-sm font-medium text-gray-700">Email ID</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                  

                    <div className="flex flex-col items-start text-left">
                        <label className="block text-sm font-medium text-gray-700">D.O.B</label>
                        <input
                            id="dob"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                 

                    <div className="flex flex-col items-start text-left">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 transition duration-200">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CEUserProfile;