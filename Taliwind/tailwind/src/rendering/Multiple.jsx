import React, { useContext } from 'react';
import Languagecreate from './Languagecreate';

export const Multiple = () => {
    const { data, changeLanguage } = useContext(Languagecreate); // Use context correctly

    const handleChange = (lang) => {
        changeLanguage(lang);
    };

    const translate = {
        ENG: 'HI HELLO!!!!',
        MAL: 'അഡാ മോനെ'
    };
    console.log(data);
    

    return (
        <div className={data}>
            <h1>{translate[data]}</h1> 
            <button className='text-black' onClick={() => handleChange('ENG')}>
                English
            </button>
            <button className='text-black' onClick={() => handleChange('MAL')}>
                Malayalam
            </button>
        </div>
    );
};
