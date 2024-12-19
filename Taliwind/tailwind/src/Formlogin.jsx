import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Formlogin = () => {
    const navigate=useNavigate()
    const [data, setdata] = useState('')

const handlechange = (event) => {
  setdata({ ...data, [event.target.name]: event.target.value })


}
const submit = async (event) => {
  event.preventDefault()
  try {
    const response = await axios.post('http://127.0.0.1:8000/user/login', data)
    console.log(response.data);

if(response.data){
  localStorage.setItem('id',response.data._id)
  localStorage.setItem('email',response.data.email)
  alert('login Succesful')
  navigate('/formpro')
}else{
  alert('invalid respones from server')
}

  } catch (error) {
    console.error(error);

  }


}
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen  bg-gray-800'>
                <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>
                    <form onSubmit={submit} className='flex flex-col gap-y-6 '>
                        <div className=' text-2xl font-medium text-center'>
                            login
                        </div>
                        <div className='flex flex-col gap-y-6 '>
                            <label className='text-xl font-medium text-gray-700'>Email</label>
                            <input
                                onChange={handlechange}
                                type="text"
                                name="email"
                                id='email'
                                placeholder='EX: johnDon'
                                className=' w-full border-gray-300 border-x-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400'
                            />
                             <div className='flex flex-col gap-y-6 '>
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
                        </div>
                        <div className='flex justify-center items-center gap-x-10 mt-10'>
            <button type="submit" className='bg-white px-7 py-2 shadow border-black hover:bg-blue-300'>login</button>
          </div>
                    </form>

                </div>
            </div>
            </div>
            )
}
