import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Tasklogin = () => {
    const [data,setdata]= useState('')
const navigate=useNavigate
    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const submit=async (event)=>{
event.preventDefault()
try {
    const response = await axios .post('http://127.0.0.1:9000/task/login',data)
    console.log(response.data)
    if(response.data){
        localStorage.setItem('id',response.data._id)
        localStorage.setItem('email',response.data.email)
        alert('login Succesful')
      }else{
        alert('invalid respones from server')
      } 
} catch (error) {
    console.log (error)
}
    }
    return (
        <div> <div>
            <div className='flex justify-center items-center min-h-screen  bg-gray-900'>
                <div className='bg-gray-800 py-8 px-28 rounded-lg shadow-black'>
                    <form onSubmit={submit} className='flex flex-col w-full gap-y-6 '>
                        <div className=' w-full text-3xl font-medium text-center text-white'>
                            Sign in to your account
                        </div>
                        <div className='flex flex-col gap-y-6 '>
                            <label className='text-xl font-medium text-white'> Your Email</label>
                            <input
                                onChange={handlechange}
                                type="text"
                                name="email"
                                id='email'
                                placeholder='EX: johnDon'
                                className=' w-full  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
                            />
                            <div className='flex flex-col gap-y-6 '>
                                <label className='text-xl font-medium text-white'>Password</label>
                                <input
                                    onChange={handlechange}
                                    type="password"
                                    name="password"
                                    id='password'
                                    placeholder='........'
                                    className=' w-full  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
                                />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-x-10 mt-10'>
                            <button type="submit" className='bg-blue-700 text-white px-36 py-2 shadow rounded-lg  border-black hover:bg-blue-800'>sign in</button>
                        </div>
                        <p class=" font-light text-gray-500 text-base dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 text-lg text-blue-500 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>

                </div>
            </div>
        </div>
        </div>
    )
}
