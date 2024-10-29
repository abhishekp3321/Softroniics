import React, { useState } from 'react'

export const Keypro = () => {
     const products=[
    {id:1,product:"laptop",name:"lenovo" ,qty:1},
    {id:2,product:"phone",name:"redmi", qty:1}
    ] 
    const [data, Setdata] = useState(products)

    const increase = (id) => {
        const updatedData = data.map((item)=> item.id == id ? {...item,qty:item.qty+1}:item)
        Setdata(updatedData)
    }
  return (
    <div>
        {data.map((item)=>(
            <div key={item.id}>
            <h1> {item.product}</h1>
            <h1> {item.name}</h1>
            <h1> {item.qty}</h1>
            <button  onClick={() => increase(item.id)}>+</button>

            </div>
        )
    )}
    </div>
  )
}