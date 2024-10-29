import React, { useState } from 'react'

export const Formset = () => {
  const [data, setdata] = useState('')

  const handlechange = (event) => {
    setdata(event.target.value)


  }
  const submit = (event) => {
    event.preventDefault()
    setdata(data)
    console.log(data);
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-lime-500'>
      <div className='bg-white  py-8 px-28 rounded-lg shadow-lime-950'>
        <form onSubmit={submit}>
          <div className='my-5'>
            <label className=' text-2xl my-10 font-medium text-gray-700'>Username:</label>
            <input type="text" name="username" id='name' placeholder='EX:johnDon' onChange={handlechange} className='text-center  justify-center w-full   border-gray-300 border-x-black shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl   font-medium text-gray-700'>Email:</label>
            <input type="email" name="email" id='email' placeholder='EX:abc@mail.com' onChange={handlechange} className='w-full   text-center border-gray-300 shadow-sm  border-x-black focus:border-lime-500 focus:ring focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl font-medium text-gray-700'>Age:</label>
            <input type="number" name="age" id='age' placeholder='EX:21' onChange={handlechange} className='w-full  text-center border-gray-300 shadow-sm  border-x-black focus:border-lime-500 focus:ring focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl font-medium text-gray-700'>Password:</label>
            <input type="password" name="password" id='password' placeholder='**********' onChange={handlechange} className='w-full  text-center border-gray-300  border-x-black   focus:border-lime-500 focus:ring focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl font-medium text-gray-700'>Confirm Password:</label>
            <input type="password" name=" confirm password" id=' confirm password' placeholder='**********' onChange={handlechange} className='w-full  text-center border-gray-300  border-x-black  shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl font-medium text-gray-700'>Phone Number</label>
            <input type=" Number" name="Phone number" id='phone number' placeholder='EX:0123456789' onChange={handlechange} className='w-full text-center border-gray-300  focus:border-lime-500 focus:ring focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl font-medium text-gray-700'>Address:</label>
            <input type=" text " name="address" id='address' placeholder='address' onChange={handlechange} className='w-full  text-center border-gray-300  focus:border-lime-500 focus:ring  border-x-black focus:ring-lime-200' />
          </div>
          <div className='my-5'>
            <label className=' text-2xl font-medium text-gray-700'>Date of brith</label>
            <input type="date" name="date of brith" id='date of brith' placeholder='EX:01-01-2020' onChange={handlechange} className='w-full  text-center border-gray-300  focus:border-lime-500  border-x-black focus:ring focus:ring-lime-200' />
          </div>
          <div className='flex justify-between mt-10'>
            <button type="submit" className='bg-white px-7 py-2  shadow  border-black hover:bg-lime-500'>submit</button>
            <button type="submit" className='bg-white px-7 py-2  shadow  border-black hover:bg-lime-500'>reset</button>
          </div>
        </form>
      </div>
    </div>

  )
}
