import React from "react";
import celogofull from '../assets/celogofull.png'

const users = [
];

export const Adminuserlist = () => {
    return (
        <div className="flex w-full">
            <div className="bg-white w-96 min-h-screen p-4 ">
            <div className="flex m-10 justify-center items-center"><img
                                        src={celogofull}
                                        width="250"
                                          height="80"
                                        title="Flipkart"
                                    /></div>
                <div className="space-y-7 py-10">
                   <button className="hover:bg-[#00b9ff] p-4 justify-start flex font-medium items-center text-2xl w-72 hover:text-white rounded-lg "> <li className="flex items-center gap-2 cursor-pointer  ">
                        <span>📊</span> Overview
                    </li>
                    </button>
                    <button className="hover:bg-[#00b9ff] p-4 justify-start flex font-medium   w-64 hover:text-white rounded-lg ">
                    <li className="flex  gap-2   text-2xl  cursor-pointer">
                        <span>⚖️</span> Complaints
                    </li>
                    </button>
                    <button className="hover:bg-[#00b9ff] p-4 justify-start flex font-medium items-center text-2xl w-72 hover:text-white rounded-lg ">
                    <li className="flex items-center gap-2 cursor-pointer  rounded-lg">
                        <span>👤</span> User Management
                    </li>
                    </button>   
                    <button className="hover:bg-[#00b9ff] p-4 justify-start flex font-medium items-center text-2xl w-72  hover:text-white rounded-lg ">
                    <li className="flex items-center cursor-pointer gap-2 0">
                        <span>📄</span> Reports
                    </li>
                    </button>
                </div>
                <button className="absolute bottom-4 left-4 text-2xl mb-5 font-medium p-4 w-72 bg-[#00b9ff] text-white   rounded-md">
                    👮 Admin Name
                </button>
            </div>

            <div className="bg-[#e6f8ff] rounded-lg w-full p-12 m-10">
                
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white  rounded-lg">
            <thead className="bg-gray-100 shadow-xl">
                <tr className="">
                    <th className="p-5 text-2xl font-medium text-black">Name</th>
                    <th className="p-5 text-2xl font-medium text-black">Email</th>
                    <th className="p-5 text-2xl font-medium text-black">Phone</th>
                    <th className="p-5 text-2xl font-medium text-black">Address</th>
                    <th className="p-5 text-2xl font-medium text-black">ID Proof</th>
                    <th className="p-5 text-2xl font-medium text-black">Reports</th>
                </tr>
            </thead>
            <tbody>
    <tr className="bg-[#ffffff]">
        <td className="p-5 text-center">Abhishek</td>
        <td className="p-5 text-center">abhi@mail.com</td>
        <td className="p-5 text-center">935848145</td>
        <td className="p-5 text-center">calicut</td>
        <td className="p-5 text-center">Addar</td>
        <td className="p-5 text-center">5</td>
    </tr>
    <tr className="bg-[#f9fafb]">
    <td className="p-5 text-center">Abhishek</td>
        <td className="p-5 text-center">abhi@mail.com</td>
        <td className="p-5 text-center">935848145</td>
        <td className="p-5 text-center">calicut</td>
        <td className="p-5 text-center">Addar</td>
        <td className="p-5 text-center">1</td>
    </tr>
 
</tbody>

        </table>
    </div>
</div>

            </div>
        
    );
};