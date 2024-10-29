import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
        
      <div className='main1 bg-blue-800 h-auto p-4 flex-wrap'>

<nav className='busi flex items-center flex-wrap'>
  <div className='text-4xl  font-bold text-white mx-40 \'>Business</div>
  <div className='font-bold mt-1 flex flex-wrap justify-center '>
  <Link to='/home'> <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Home</a></Link> 
    <Link to='/about'><a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">About</a></Link>
    <Link to='/contact'><a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl">Contact</a></Link>
  </div>
</nav>
    </div>
    </div>
  )
}
