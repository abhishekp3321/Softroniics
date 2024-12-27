import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Taskview = () => {
    const [viewdata, setviewdata] = useState('');

    const fetchdata = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:9000/task/view`, viewdata)
            console.log(response);
            setviewdata(response.data)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])
    console.log(viewdata);
    const del = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:9000/task/delete/${id}`)
            fetchdata()
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
            <div>
            <div className='flex justify-center items-center min-h-screen bg-gray-800'>
                <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>

                    <div className=' text-2xl font-medium text-center'>
                        View data
                    </div>

                    <div className="container mx-auto p-6">
                        {viewdata.length > 0 && (
                            <div className="grid grid-cols-2 gap-6">
                                {viewdata.map((task) => (
                                    <div key={task.id} className="bg-white border rounded-lg shadow-lg p-4">
                                        <div className="mb-4">
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">Name:</strong> {task.name}
                                            </p>
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">Age:</strong> {task.age}
                                            </p>
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">Email:</strong> {task.email}
                                            </p>
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">password:</strong> {task.password}
                                            </p>

                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <button
                                                className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
                                                onClick={() => del(task._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

