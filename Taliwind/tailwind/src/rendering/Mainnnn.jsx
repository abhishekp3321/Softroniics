import React from 'react'
import Login from './Login'
import False from './False'

const Mainnnn = () => {
    let state=false

  return (
    <div>{state ? <Login></Login>:<False></False>}</div>
  )
}

export default Mainnnn