import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Formview = () => {
    const [viewdata, setviewdata] = useState('');

    const fetchdata = async () => {
        try {
            const respones = await axios.get(`http://127.0.0.1:8000/user/view`, viewdata)
            // console.log(respones);
            setviewdata(respones.data)


        } catch (error) {
            console.error(error)

        }

    }

    useEffect(() => {
        fetchdata()
    }, [])
    console.log(viewdata);

    const del = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/user/delete/${id}`)
            alert('Deleted successfully!')
            fetchdata()

        }

        catch (error) {
            console.log(error);
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
                                {viewdata.map((user) => (
                                    <div key={user.id} className="bg-white border rounded-lg shadow-lg p-4">
                                        <div className="mb-4">
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">Name:</strong> {user.name}
                                            </p>
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">Age:</strong> {user.age}
                                            </p>
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">Email:</strong> {user.email}
                                            </p>
                                            <p className="text-xl font-semibold text-gray-800">
                                                <strong className="text-gray-600">password:</strong> {user.password}
                                            </p>

                                        </div>
                                        <div>
                                            <img src={`http://127.0.0.1:8000/uploads/${user.image}`} alt="User" />
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <Link to={`/formedit/${user._id}`}>
                                                <button
                                                    className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
                                                >
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
                                                onClick={() => del(user._id)}
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
            </div >
        </div >
    )
}
