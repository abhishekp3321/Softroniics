import React, { useEffect, useState } from 'react'
import { regapi } from './api/api'

export const Regform = () => {
    const [regdata, setregdata] = useState('')

    const change = (event) => {
        setregdata({ ...regdata, [event.target.name]: event.target.value })
    }
    console.log(regdata)

    const submit = async (event) => {
        event.preventDefault()

        try {
            const res = await regapi(regdata)
            console.log(res);
            if (res.data) {
                alert("register success")
              } else {
                alert('fill the form')
              }
        } catch (error) {
            console.log(error);
        }
   
        
    }

return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <form on onSubmit={submit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Username
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={change}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        onChange={change}
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        onChange={change}
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div> </div>
)
}
