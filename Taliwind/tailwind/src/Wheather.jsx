import axios from 'axios'
import React, { useState } from 'react'

export const Wheather = () => {
    const [data, setdata] = useState(null)
    const [search, setsearch] = useState('')
    const fetchdata = async () => {
        const reply = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0cf3d05c6cb443424f42856d18e090b3`)
        setdata(reply.data.search)
        console.log(reply.data)
}

    const handlechange=(event)=>{
        setsearch(event.target.value)
    }
return (
    <div>
    <input onChange={handlechange} placeholder="Enter city name" />
    <button onClick={fetchdata}>Search</button>
    <div>
        {data && (
            <div>
                <h2>{data.name}, {data.sys.country}</h2>
                <p>Temperature: {data.main.temp} °C</p>
                <p>Humidity: {data.main.humidity} %</p>
                <p>Wind Speed: {data.wind.speed} m/s</p>
                <h3>Weather Conditions:</h3>
                <p>{data.weather[0].description}</p>
            </div>
        )}
    </div>
</div>
)
}
