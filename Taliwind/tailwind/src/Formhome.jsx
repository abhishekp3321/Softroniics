import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Formhome = () => {


  const [data, setdata] = useState({ image: null })
  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }
  const handlefile = (event) => {
    setdata({ ...data, image: event.target.files[0] })
  }
  const submit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("quantity", data.quantity);
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("email", data.email);
    formData.append("password", data.password);
    console.log(formData);
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/upload', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

      console.log(response);
      console.log(data);
      if (response.data) {
        alert("user added")
      } else {
        alert('fill the form')
      }
    } catch (error) {
      console.error(error);

    }


  }
  return (
    <div className='flex justify-center items-center min-h-screen  bg-gray-800'>
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
          <div>
            <label className='text-xl font-medium text-gray-700'>Email</label>
            <input
              onChange={handlechange}
              type="text"
              name="email"
              id='email'
              placeholder='EX: johnDon'
              className=' w-full border-gray-300 border-x-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400'
            />
          </div>
          <div>
            <label className='text-xl font-medium text-gray-700'>password</label>
            <input
              onChange={handlechange}
              type="password"
              name="password"
              id='password'
              placeholder='EX: johnDon'
              className=' w-full border-gray-300 border-x-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400'
            />
          </div>
          <div className='flex flex-col gap-y-6 '>
            <label>Image:</label>
            <input onChange={handlefile} type="file" name="image" />
          </div>

          <div className='flex justify-between gap-x-10 mt-10'>
            <button type="submit" className='bg-white px-7 py-2 shadow border-black hover:bg-blue-300'>Submit</button>
            <button type="reset" className='bg-white px-7 py-2 shadow border-black hover:bg-blue-300'>Reset</button>
            <Link to="/formlogin">
              <button type="reset" className='bg-white px-7 py-2 shadow border-black hover:bg-blue-300'>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
