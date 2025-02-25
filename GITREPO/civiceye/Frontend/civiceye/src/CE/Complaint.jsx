import React from "react";
import { Link, Links } from "react-router-dom";
export const Complaint = () => {
    return (
        <div class="flex items-center justify-center min-h-screen bg-white">
        <div class="w-full max-w-2xl     p-6">
          <h1 class="text-2xl font-semibold text-center">Report Issues Seamlessly</h1>
          <p class="mt-2 text-center text-gray-700">
            Our platform empowers users to submit complaints with ease, offering tools to upload multimedia for comprehensive issue reporting.
          </p>
          <form class="mt-6">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Complaint type</label>
              <select
                class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Select complaint type</option>
                        <option>Waste Dumping</option>
                        <option>Public Nuisance</option>
                        <option>Traffic Violations</option>
                        <option>Water Leakage</option>
                        <option>Power Outage</option>
                        <option>Noise Complaint</option>
                        <option>Road Damage</option>
                        <option>Other</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Proof</label>
              <button
                type="button"
                class="w-full px-4 py-2 mt-1 text-white bg-blue-300 rounded-md hover:bg-blue-400 focus:outline-none"
              >
                Upload photo or video
              </button>
            </div>
            <div class="flex justify-between">
              <button
                type="submit"
                class="w-[48%] px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
              <Link
              to="/reghome"
              className="w-[48%] px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none text-center flex items-center justify-center"
            >
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </div>
      

    )
}