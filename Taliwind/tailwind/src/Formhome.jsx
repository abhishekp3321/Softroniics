import axios from 'axios'
import React, { useState } from 'react'

export const Formhome = () => {
  

  const [data, setdata] = useState('')

  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })


  }
  const submit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/add', data)
      console.log(response);

      setdata(data)
      console.log(data);

    } catch (error) {
      console.error(error);

    }


  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-500'>
      <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>
        <form onSubmit={submit} className='flex flex-col gap-y-6 '>
          <div className=' text-2xl font-medium text-center'>
            Add Data
          </div>
          <div className='flex flex-col gap-y-6 '>
            <label className='text-xl font-medium text-gray-700'>Name</label>
            <input
              onChange={handlechange}
              type="text"
              name="name"
              id='name'
              placeholder='EX: johnDon'
              className=' w-full border-gray-300 border-x-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400'
            />
          </div>

          <div className='flex flex-col gap-y-6 '>
            <label className='text-xl font-medium text-gray-700'>Age</label>
            <input onChange={handlechange}
              type="text"
              name="age"
              id='age'
              placeholder='EX: 21'
              className='w-full  border-gray-300 shadow-sm border-x-black focus:border-blue-500 focus:ring focus:ring-blue-400'
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
