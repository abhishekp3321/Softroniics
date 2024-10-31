import React from 'react'
import Admin from './Admin'
import User from './User'
import Geust from './Geust'

const Lead = () => {
  
    let content="admin"
  
  return (
    <div>
   {content == 'admin' ? <Admin /> : content == 'user' ? <User /> : <Geust />}    </div>
  )
}

export default Lead