 import React from 'react'
 
 export const Taskview = () => {
   return (
     <div><div>
     <div className='flex justify-center items-center min-h-screen bg-gray-800'>
         <div className='bg-white py-8 px-28 rounded-lg shadow-lime-950'>

             <div className=' text-2xl font-medium text-center'>
                 View data
             </div>

             <div className="container mx-auto p-6">
                     <div className="grid grid-cols-2 gap-6">
                      
                                
                                 <div className="flex justify-between gap-4">
                                         <button
                                             className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
                                         >
                                             Edit
                                         </button>
                                     
                                     <button
                                         className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
                                     >
                                         Delete
                                     </button>
                                 </div>
                             </div>
                         
                     </div>
                 
             </div>
         </div>
     </div >
 </div >
   )
 }
 
 