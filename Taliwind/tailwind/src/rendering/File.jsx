import React, { useContext } from 'react';
import Theamcontext from './Theamcontext';
import Teamprovider from './Teamprovider'
import './style.css'

export const File = () => {
    const value = useContext(Theamcontext);
    console.log(value);
    

    return (
        <div className={value.theme} >
            <h2>Hello</h2>
            <button className='text-pink-500' onClick={value.changeTheme}>Click</button>
        </div>
    );
};
