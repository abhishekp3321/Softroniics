import React from 'react'
import { Child } from './child'
import img from './gt.jpg'

export const Parent = () => {
  return (
    <div>
      <Child name={'NAME:Abhishek'} age={55} image={img}></Child>  
      <Child name1={'hellooo'} age1={56}></Child>  
      <Child name2={'hellooooooo'}age2={51}></Child>  

    </div>
  )
}
