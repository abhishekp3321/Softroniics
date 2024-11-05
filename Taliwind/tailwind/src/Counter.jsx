import { Button } from 'bootstrap';
import React, { useState } from 'react'

export const Counter = () => {
    const[data,setdata]=useState(0)

const increment=()=>{
    setdata(data+1);

   }
const decrement=()=>{
    setdata(data-1)
}
  return (

    <div><h1>{data}</h1>
        <div>
            <h1>
                increment
                <button onClick={increment}>+</button>
            </h1>
        </div>
        <div>
            decrement
            <button onClick={decrement}>-</button>
        </div>
    </div>
    
  )
}
