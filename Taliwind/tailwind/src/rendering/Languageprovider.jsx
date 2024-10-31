import React, { useState } from 'react'
import Languagecreate from './Languagecreate'

export const Languageprovider = ({ multi }) => {
    const[data,setdata] = useState('ENG')

   const changelanguage= (language)=>{
    setdata(language)

   }
  return (
    <div><Languagecreate.Provider value={{data,changelanguage}}>{multi}</Languagecreate.Provider></div>
  )
}
