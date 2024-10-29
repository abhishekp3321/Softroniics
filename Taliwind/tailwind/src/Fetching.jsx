import React, { useEffect, useState } from 'react'

export const Fetching = () => {
    const [list,setlist] = useState``
    
     let usersdata =() => { 
       return([ {id: 1, name:'shaji'},{id:2,name:'abu'}])
     }
      useEffect(()=> {
        setTimeout(()=>{
        setlist(usersdata())
      },3000)
      },[]
    )
   
  return (
   
<ul>
{list.map(user => (
    <li key={user.name}>
    <h1>{user.id}</h1>
    <h1>{user.name}</h1>
    </li>
))}
</ul>
    )
}
