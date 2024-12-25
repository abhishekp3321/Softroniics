import React from 'react'

export const Taskreg = () => {
  return (
    <div>
    <div className='flex justify-center items-center min-h-screen  bg-gray-900'>
    <div className='bg-gray-800 py-8 px-28 rounded-lg shadow-black'>

    <form
            //  onSubmit={handleSubmit} 
            className=" flex flex-col w-full gap-y-6 ">
                                <div className=' w-full text-3xl font-medium text-center text-white'>
                                    Register
</div>
                <div className="flex flex-col gap-y-6 ">

                <label className='text-xl font-medium text-white'>
                        Username
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='EX:johnDon'
                        // onChange={handleChange}
                        className=' w-full  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
                        
                    />
                </div>
                <div className="flex flex-col gap-y-6">
                <label className='text-xl font-medium text-white'>                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder='EX:21'
                        // onChange={handleChange}
                        className=' w-full  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
                        required
                    />
                </div>
                <div className="flex flex-col gap-y-6">
                <label className='text-xl font-medium text-white'>                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        // onChange={handleChange}
                        placeholder='EX:johnDon@gmail.com'
                        className=' w-full  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
                        required
                    />
                </div>
                <div className="flex flex-col gap-y-6">
                <label className='text-xl font-medium text-white'>                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        // onChange={handleChange}
                        placeholder='......'
                        className=' w-full  border border-gray-900 rounded-lg text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  shadow-sm p-2.5 bg-gray-600 focus:ring-primary-600 focus:border-primary-600 block'
                        required
                    />
               </div>
               <div className="flex justify-center items-center  mt-1">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white w-96 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </div>
              
              </form>
              </div>
           </div>    
    </div>
  )
}
