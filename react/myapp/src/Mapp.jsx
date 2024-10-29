import React from 'react'

export const Mapp = () => {
    const data=[
        {id: 1, name: 'sethu',place:'kannur',age:20},
        {id: 2, name: 'ammu',place:'kozhikode',age:21}
    ]
  return (
    <div>
        {data.map((user)=>(
        <div>
            
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.place}</h1>
            <h1>{user.age}</h1>
            </div>

        ))}
    </div>
  )
}

