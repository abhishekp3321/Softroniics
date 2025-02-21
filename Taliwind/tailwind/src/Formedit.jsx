import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Formedit = () => {
    const { id } = useParams();

    console.log("ID from URL:", id);

    const [viewdata, setviewdata] = useState('');
    const [edituserdata, setedituserdata] = useState('');


    const fetchdata = async () => {
        try {
            const respones = await axios.get(`http://127.0.0.1:8000/user/view`)
            setviewdata(respones.data)
            console.log("viewdatastate", viewdata);
        } catch (error) {
            console.error(error)
        }

    }
    useEffect(() => {
        fetchdata();
    }, []);

    const selectUserById = (id) => {
        const selectedUser = viewdata.find(user => user._id === id);
        setedituserdata(selectedUser || {});
        console.log("edituserdata", selectedUser);
    };

    useEffect(() => {
        if (viewdata.length > 0) {
            selectUserById(id);
        }
    }, [viewdata, id]);


    
    const handlechange = (event) => {
        setedituserdata({ ...edituserdata, [event.target.name]: event.target.value });
    }
    
    const edit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/user/update/${id}`, edituserdata);
            await fetchdata();
        } catch (error) {

            console.log("Error updating user:", error);
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen  bg-gray-800'>
            <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>
                <form onSubmit={edit} className='flex flex-col gap-y-6'>
                    <div className='text-2xl font-medium text-center'>
                        Edit Data
                    </div>

                    {/* Name Field */}
                    <div className='flex flex-col gap-y-6'>
                        <label className='text-xl font-medium text-gray-700'>Name</label>
                        <input
                            onChange={handlechange}
                            type="text"
                            name="name"
                            id="name"
                            value={edituserdata.name || ''}  // Controlled input
                            placeholder='EX: johnDon'
                            className='w-full border-gray-300 border-x-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400'
                        />
                    </div>

                    {/* Age Field */}
                    <div className='flex flex-col gap-y-6'>
                        <label className='text-xl font-medium text-gray-700'>Age</label>
                        <input
                            onChange={handlechange}
                            type="text"
                            name="age"
                            id="age"
                            value={edituserdata.age || ''}  // Controlled input
                            placeholder='EX: 21'
                            className='w-full border-gray-300 shadow-sm border-x-black focus:border-blue-500 focus:ring focus:ring-blue-400'
                        />
                    </div>

                    <div className='flex justify-between gap-x-10 mt-10'>
                        <button type="submit" className='bg-white px-7 py-2 shadow border-black hover:bg-blue-300'>Submit</button>
                        <button type="reset" className='bg-white px-7 py-2 shadow border-black hover:bg-blue-300'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}   
