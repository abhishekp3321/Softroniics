import React from 'react';
import simle from './im/simle.jpeg';
import play from './im/play.png';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='h-screen bg-blue-700 flex items-center justify-center'>
            <div>
                <div className='flex justify-center flex-wrap'>
                    <div className='txt text-white w-[1000px]'>
                        <h1 className='text-5xl font-semibold'>
                            Corporate & Business Site<br />
                            Template By Ayro UI.
                        </h1>
                        <p className='mt-10 font-thin text-4xl'>
                            We are a digital agency that helps brands achieve their business customers.<br />
                            We see technology as a tool to create amazing things.
                        </p>

                        <div className='flex'>
                            <button className="bg-white font-bold text-base text-blue-500 mt-9 py-1 px-6   hover:bg-blue-700   hover:text-whiterounded">GET STARTED</button>
                            <img src={play} className="rounded-full mt-9 ml-5 h-12 w-12" alt="Play button" />
                            <div className='mt-12 ml-5 font-semibold hover:text-black '>Watch here</div>
                            <Link to='/main'>
                                <button className="bg-white font-bold mx-5 hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-11 py-1 px-6 rounded">Back</button>
                            </Link> 
                            <Link to='/about'><button className="bg-white font-bold mx-5 hover:text-white hover:bg-blue-700 text-base text-blue-500 mt-11 py-1 px-6 rounded">next</button></Link>

                        </div>
                    </div>
                    <div className='pb-32'>
                        <img src={simle} alt="Description of the image" className='w-[600px] h-[400px] object-fill' />
                    </div>
                </div>
            </div>
        </div>
    );
}
