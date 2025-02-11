import React from "react";
import celogofull from '../assets/celogofull.png'
import icon from '../assets/down.png'
export const Admincom = () => {

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
                <div className="flex flex-wrap   justify-between "><div className=" flex gap-x-15"><button className="bg-white p-2 cursor-pointer shadow-lg text-xl rounded-xl font-medium w-52">Sort by Date</button><button className="bg-white rounded-xl p-2 cursor-pointer shadow-lg text-xl font-medium w-52">Sort by Type</button>
                </div>
                    <div className="flex cursor-pointer "><img src={icon}
                        width="30"
                        height="20"
                        title="Flipkart"
                    ></img>
                    </div>
                </div>
                <div class="w-full p-4 ">
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white  rounded-lg">
      <thead class="bg-gray-100 shadow-xl">
        <tr>
          <th class="px-6 py-3 text-left text-2xl font-medium text-gray-700 ">Date</th>
          <th class="px-6 py-3 text-left text-2xl font-medium text-gray-700">Description</th>
          <th class="px-6 py-3 text-left text-2xl font-medium text-gray-700">Location</th>
          <th class="px-6 py-3 text-left text-2xl font-medium text-gray-700 ">Uploader</th>
          <th class="px-6 py-3 text-left text-2xl font-medium text-gray-700 ">Type</th>
          <th class="px-6 py-3 text-center text-2xl font-medium text-gray-700">Submission</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td class="px-6 py-4 text-xl text-gray-700 ">01-01-2012</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Waste Dumping</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Kozhikode</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Milan</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Waste</td>
          <td class="px-6 py-4 text-center ">
            <button class="px-4 py-2 text-sm text-white bg-gray-400 rounded-lg">View</button>
          </td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 text-xl text-gray-700 ">01-01-2012</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Waste Dumping</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Kozhikode</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Milan</td>
          <td class="px-6 py-4 text-xl text-gray-700 ">Waste</td>
          <td class="px-6 py-4 text-center ">
            <button class="px-4 py-2 text-sm text-white bg-gray-400 rounded-lg">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  </div>

            
            
        
    )
}
