import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Formprofile = () => {
    let id=localStorage.getItem("id")
    console.log(id);
    const [viewdata, setviewdata] = useState('');

    const fetchdata = async () => {
        try {
            const respones = await axios.get(`http://127.0.0.1:8000/user/viewprofile/${id}`)
            // console.log(respones);
            setviewdata(respones.data)
         


        } catch (error) {
            console.error(error)

        }

    }

    useEffect(() => {
        fetchdata()
    }, [])
    let logout=()=>{
        localStorage.clear()
    }
    console.log(viewdata);
    return (
        <div><div className='flex justify-center items-center min-h-screen bg-gray-800'>
            <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>

                <div className=' text-2xl font-medium text-center'>
                    <p>{viewdata.name}</p>
                    <p>{viewdata.age}</p>
                    <p>{viewdata.email}</p>
                </div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
        </div>
    )
}
