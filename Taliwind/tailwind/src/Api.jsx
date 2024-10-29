import React, { useState } from 'react'
import axios from 'axios'
export const Api = () => {
    const [data, setdata] = useState([])
    const fetchdata = async () => {
        const respones = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setdata(respones.data);

    }
    console.log(data);
    return (
        <div>
            <button onClick={fetchdata}>Click</button>
            <div>
                {data.map(item => (
                    <div key={item.id}> 
                    <p>Name: {item.id}</p>
                    <p>Title: {item.title}</p>
</div>
                ))}
            </div>
        </div>
    )
}