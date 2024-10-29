import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
    return (
        <div> <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                <p className="text-center mb-4">We'd love to hear from you! Please fill out the form below.</p>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Send Message
                    </button>
                   <Link to ='/about'><button className="bg-white font-bold  hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-9 py-1 px-6 rounded">back</button></Link> 
                   <Link to ='/main'><button className="bg-white font-bold  hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-9 py-1 px-6 rounded">Main</button></Link> 

                </form>
            </div>
        </div></div>
    )
}



