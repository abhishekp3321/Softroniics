import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreasequantity, increasequantity, removeitemfromcart } from '../Slice';

export const Addtocart = () => {
    const items=useSelector((state) => state.counter.data);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  console.table(items);

  return (
    <div className='bg-[#e3e6e6] h-screen'>
      <div className='flex justify-evenly py-6 gap-10 bg-[#232f3e]'>
      <Link to='/homecart'>
        <div className='flex justify-evenly items-center'>
          <img className='w-[50px] h-[50px]' src='https://img.icons8.com/?size=100&id=TfhgUym1Y8vb&format=png&color=000000' alt='img is not found' />
          <p className='text-slate-200 font-bold text-2xl'>Amazon.in</p>
        </div>
        </Link> 
        <input type='text' placeholder='Search' className='w-[50%] h-10 border-2 border-black text-center focus:ring focus:ring-[#F3A847]' />
        <button>
          <img className='w-[50px] h-[50px]' src='https://img.icons8.com/?size=100&id=13020&format=png&color=000000' alt='search icon' />
        </button>
      </div>

      <div className='grid grid-rows-8 gap-5 my-5 mx-5'>
      {items.map((item) => (
       
          <div key={item.id} className='flex justify-between bg-slate-50  rounded-lg shadow-lg border-2 border-black p-6'>
         
            
            <div>
              <img src={item.image} alt={item.name} className='w-[150px] h-[150px]'  />
              <p className='text-lg font-bold' >{item.title}</p>
              <p className='font-medium'>{item.description}</p>
              <p className='text-lg font-bold'>{item.price}</p>
            </div>
            <div className='flex items-center gap-3'>
              <button  onClick={() => dispatch(removeitemfromcart(item.id))} className=' bg-[#F3A847] py-1 px-9 shadow-lg border-2 border-black text-xl hover:bg-orange-600 font-semibold'>
               Remove
              </button>
              <button  onClick={() => dispatch(increasequantity(item))} className=' bg-[#F3A847] py-1 px-9 shadow-lg border-2 border-black text-xl hover:bg-orange-600 font-semibold'>
               +
              </button>
              <button  onClick={() => dispatch(decreasequantity(item))}className=' bg-[#F3A847] py-1 px-9 shadow-lg border-2 border-black text-xl hover:bg-orange-600 font-semibold'>
               -
              </button>
            </div>
          </div>  
      ))}
      </div>
      
    </div>
  )
}