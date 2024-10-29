import React, { useState } from 'react'

export const Toogle = () => {
  const [change, setchange] = useState(true)

  let toogleset = () => {
    setchange(!change)
  }

  return (
    <div className="justify-center "style={{ backgroundColor: change ? 'blue' : 'green', padding: '20px', borderRadius: '5px',display:'flex',justifyContent:'center',alignItems:'center', height:'100px',width:'100px'}}>
      <button onClick={toogleset}>toogle</button>
    </div>
  )
}
