import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Movie = () => {
    const [data, setdata] = useState([])
    const [search,setsearch] =useState('')
    const fetchdata = async () => { 
        const reply = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`)
        setdata(reply.data.Search);
        console.log(data)

    }

    const handlechange=(event)=>{
        setsearch(event.target.value)
    }
    return (
        <div>
            <input onChange={handlechange} ></input>
            <button onClick={fetchdata}>search</button>
            <div>
                {data && data.map((item) => (
                    <div key={item.imdbID}>
                        <img src={item.Poster} />
                        <p>{item.Title}</p>
                        <p>{item.Year}</p>
                        <p>{item.imdbID}</p>
                        <p>{item.Type}</p>
                        <Link to={`/movied/${item.imdbID}`}>click</Link>
                    </div>  
                ))}
            </div>

        </div>
    )
}
