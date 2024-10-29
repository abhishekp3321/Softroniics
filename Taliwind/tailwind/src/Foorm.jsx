import React, { useState } from 'react'

export const Foorm = () => {
    const [data, setdata] = useState('')
    const handlechange = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const handelsubmit = (event) => {
        event.preventDefault()
        setdata(data)
        console.log(data)
    }
   
    return (
        <div> <form onSubmit={handelsubmit}>
            <h1> create account</h1>
            <label name='name'>name</label>
            <input onChange={handlechange} type='text' name='name' />
            <label name='place'>place</label>
            <input onChange={handlechange} type="text" name='place' />
            <button type='submit'> submit</button>
        </form></div>
    )
}
