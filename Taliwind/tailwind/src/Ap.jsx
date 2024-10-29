import React, { useState } from 'react'
import axios from 'axios'

export const Ap = () => {
    const [data, setdata] = useState([])
    const getdata = async () => {
        const reply = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setdata(reply.data)
        console.log(data);
    }
    return (
        <div className='p-4 flex flex-col  mx-auto  items-center bg-violet-950'>
            <div className='items-center'>
                <button className='bg-black  text-white font-bold py-2 px-4 rounded  hover:bg-violet-800' onClick={getdata}>Click</button>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 ' >
                    {data.map(pro => (
                         <div className=''>
                        <div  className="bg-transparent hover:bg-black  text-white rounded-lg shadow-md p-4 flex flex-col items-center "
            key={pro.id}>
                            <p className='text-white '>user Id:{pro.userId}</p>
                            <p className='text-white'>Id: {pro.id}</p>
                            <p className='text-white'>Title: {pro.title}</p>
                            <p className='text-white'>Completed: {pro.completed ? 'true':'false'}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
