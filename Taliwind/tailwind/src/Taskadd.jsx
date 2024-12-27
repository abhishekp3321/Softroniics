import axios from 'axios'
import React, { useState } from 'react'

export const Taskadd = () => {
  const [data, setdata] = useState([])

  const handleChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }
  const submit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:9000/task/add', data);
      console.log(response);

    }
    catch (error) {
      console.error(error);
    } 
  }

  return (
    <div>
      <div className='flex justify-center items-center min-h-screen  bg-gray-900'>
        <div className='bg-gray-800 py-8 px-28 rounded-lg shadow-black'>
          <form onSubmit={submit} className='flex flex-col gap-y-6 '>
            <div className=' text-white text-2xl font-medium text-center'>
              Add Data
            </div>
            <div className='flex flex-col gap-y-6 '>
              <label className='text-xl font-medium  text-white'>Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id='name'
                placeholder='EX: johnDon'
                className=' w-96  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
              />
            </div>

            <div className='flex flex-col gap-y-6 '>
              <label className='text-xl font-medium text-white'>Age</label>
              <input
                onChange={handleChange}
                type="text"
                name="age"
                id='age'
                placeholder='EX: 21'
                className='  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
              />

            </div>
            <div className='flex flex-col gap-y-6 '>
              <label className='text-xl font-medium text-white'>Email</label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id='email'
                placeholder='EX: johnDon@gmail.com'
                className='   border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
              />
            </div>
            <div className='flex flex-col gap-y-6 '>
              <label className='text-xl font-medium text-white'>password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id='password'
                placeholder='....'
                className='   border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
              />
            </div>
            {/* <div className='flex flex-col gap-y-6 '>
                <label>Image:</label>
                <input
                 onChange={handlefile} type="file" name="image" />
              </div> */}

            <div className='flex justify-between gap-x-10 mt-10'>
              <button type="submit" className='bg-blue-700 text-white rounded-lg px-7 py-2 shadow border-black hover:bg-blue-300'>Submit</button>
              <button type="reset" className='bg-blue-700  text-white rounded-lg px-7 py-2 shadow border-black hover:bg-blue-300'>Reset</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
