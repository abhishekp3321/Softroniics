import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
         <div className='mainwhite p-16 flex items-center'>
                <div className='con2 text-black flex flex-wrap justify-around items-center'>
                    <div className='flex justify-center'>
                        <img className='rounded-lg  w-[75%]'
                            src='https://assets.bizclikmedia.net/900/2c80fe0ddf3c3124926f2abe54fd67cc:e64e73ad7c7b991d4a6eee4e06a7a94b/tyler-franta-iusj25iyu1c-unsplash.webp'
                            alt="Main Picture" />
                    </div>
                    <div className='texts2 mx-6 my-10 w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3'>
                        <div className=' flex items-center '>
                            <p className='text-4xl  font-bold text-[#145cd4]'>~</p>
                            <p className='text-lg mx-4 font-bold'>OUR STORY</p>
                        </div>
                        <p className='text-5xl font-bold'>Our team comes with the experience and knowledge</p>
                        <div className='p-3 my-10 flex items-center bg-gray-200 rounded sm:flex-none'>
                            <button class=" bg-[#145cd4] text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-black ">
                                Who We Are
                            </button>
                            <button class="mx-3 bg-white text-black font-bold py-2 px-4 rounded-md border border-white hover:bg-[#145cd4] hover:text-white">
                                Our Vision
                            </button>
                            <button class="bg-white text-black font-bold py-2 px-4 rounded-md border border-white hover:bg-[#145cd4] hover:text-white">
                                Our History
                            </button>


                        </div>
                        <p className='px-2 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus iste voluptas doloremque mollitia atque reiciendis aperiam tenetur provident id, consectetur ex. Alias voluptatem expedita saepe molestiae</p>
                        <p className='px-2 text-gray-500 my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus iste voluptas </p>
                        <Link to ='/home'><button className="bg-white font-bold  hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-9 py-1 px-6 rounded">back</button></Link> 
                            <Link to ='/main'><button className="bg-white font-bold  hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-9 py-1 px-6 rounded">Main</button></Link> 
                            <Link to ='/contact'><button className="bg-white font-bold  hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-9 py-1 px-6 rounded">next</button></Link> 
</div>

                </div>
            </div>
    </div>
    
  )
}
