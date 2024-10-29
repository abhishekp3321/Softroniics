import React, { useState } from 'react'

export const Inde = () => {

      const [count,setcount] = useState(0)
      const [data,setdata] =useState([])
      let increment = () => {
          setcount(count + 1);
      }
      let decrement = () => {
        if (count!=0){
          setcount(count - 1);
        }
        
      }
   
    let adddata =() =>{
      setdata([{name:'abhi', age:21},{name:'adhi',age:17}])
      
    }
console.log(data);

    
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
      <button onClick={adddata}>adddata</button>
    </div>

  )
}


