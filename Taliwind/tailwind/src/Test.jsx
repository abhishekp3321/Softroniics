import React from 'react'
import simle from './im/simle.jpeg'
import play from './im/play.png'
import b from './im/icons8-b-50.png'
import i from'./im/i.jpeg'
export const Test = () => {
  return (
    <div>


      <div className='main1 bg-blue-800 h-auto p-4 flex-wrap'>

          <nav className='busi flex items-center flex-wrap'>
            <div className='text-4xl  font-bold text-white mx-40 \'>Business</div>
            <div className='font-bold mt-1 flex flex-wrap justify-center '>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Home</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Services</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Profitilo</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Pricing</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Team</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Contact</a>
            </div>
          </nav>

          <div className=' flex mt-52 justify-center  flex-wrap'>
              <div className='txt text-white w-[1000px]'>
                  <p className='  text-5xl font-semibold'>
                    Coroporate & Business Site<br></br>
                    Template By Ayro UI.</p>
                  <p className='mt-10  font-thin text-4xl'>We are digital agency thats helps brands to archive their business customers. <br></br>we see tchnology as a tool to create amazing things</p>
                  
                  <div className='flex'>
                      <button className="bg-white font-bold  text-base text-blue-500 mt-9 py-1 px-6 rounded">GET STARTED</button>
                      <img src={play} className="rounded-full mt-9 ml-5" style={{ height: '50px', width: '50px' }}></img>
                      <div className='mt-12 ml-5 font-semibold'> watch here </div>
                  </div>
              </div>
              <div className=' pb-32 '>
                <img src={simle} className='w-[600px] h-[400px] object-fill'></img>
              </div>
          </div>
      </div>
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
                    </div>

                </div>
            </div>
    </div>
  )
}
