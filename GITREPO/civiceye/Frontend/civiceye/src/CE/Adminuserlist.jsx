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

            <div className="bg-[#e6f8ff]  rounded-lg w-full p-12  m-10">
               <div className="bg-white flex flex-wrap gap-x-44 p-5 shadow-2xl mt-10 justify-center items-center w-full">
                <div className="text-2xl font-bold">Name</div>
                <div className="text-2xl font-bold">Email</div>
                <div className="text-2xl font-bold">Phone</div>
                <div className="text-2xl font-bold">Address</div>
                <div className="text-2xl font-bold">ID Proof</div>
                <div className="text-2xl font-bold">Reports</div>

               </div>
               <div className=" mt-1 ">
               <div className="bg-[#ffffff] w-full  p-5">
                nndn
               </div>
               <div className="bg-[#f9fafb] w-full p-5">
                nndn
               </div>
               <div className="bg-[#ffffff] w-full  p-5">
                nndn
               </div>
               <div className="bg-[#f9fafb] w-full p-5">
                nndn
               </div>
               <div className="bg-[#ffffff] w-full  p-5">
                nndn
               </div>
               <div className="bg-[#f9fafb] w-full p-5">
                nndn
               </div>
               <div className="bg-[#ffffff] w-full  p-5">
                nndn
               </div>
               <div className="bg-[#f9fafb] w-full p-5">
                nndn
               </div>
               <div className="bg-[#ffffff] w-full  p-5">
                nndn
               </div>
               <div className="bg-[#f9fafb] w-full p-5">
                nndn
               </div>
               
            </div>
            </div>
        </div>
    );
};