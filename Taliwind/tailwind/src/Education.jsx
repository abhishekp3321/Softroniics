 import React from 'react'
import ed from './im/images.jpeg'
export const Education = () => {
  return (
    <div>
      <div className='main1 bg-[#d81365] h-auto p-4 flex-wrap'>
        <nav className='busi flex flex-wrap justify-between'>
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
      </div>
      
      <div className='pho bg-cover bg-center  flex items-center justify-center  text-white' style={{  height:'1100px',width:'2000px' , backgroundImage: `url(${ed})` }} >

      </div>
    </div>
  )
}
