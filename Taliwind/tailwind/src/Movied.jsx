import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export const Movied = () => {
    const[data , setdata] = useState('')
    const {id}=useParams()
    console.log(data)
    useEffect(()=>{
        const fetchdata = async () => {
        const reply = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
        setdata(reply.data);
        console.log(reply.data)
    }
    fetchdata()
},[id]
    )
    console.log(data)

  return (
    <div>
         <img src={data.Poster} />
                        <p>{data.Title}</p>
                        <p>{data.Year}</p>
                        <p>{data.imdbID}</p>
                        <p>{data.Type}</p>
    </div>
  )
}
