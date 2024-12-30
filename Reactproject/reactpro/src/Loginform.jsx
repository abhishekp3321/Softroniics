import React from 'react'
import { Link } from 'react-router-dom'

export const Loginform = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen  bg-gray-800'>
                <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>
                    <form className='flex flex-col gap-y-6 '>
                        <div className=' text-2xl font-medium text-center'>
                            login
                        </div>
                        <div className='flex flex-col gap-y-6 '>
                            <label className='text-xl font-medium text-gray-700'>Email</label>
                            <input

                                type="text"
                                name="email"
                                id='email'
                                placeholder='EX: johnDon'
                                className=' w-full border-gray-300 border-x-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400'
                            />
                            <div className='flex flex-col gap-y-6 '>
                                <label className='text-xl font-medium text-gray-700'>password</label>
                                <input

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
                        <Link to='/register' className='text-center text-xl text-blue-800'>Register</Link>
                      
                    </form>

                </div>
            </div>
        </div>
    )
}
