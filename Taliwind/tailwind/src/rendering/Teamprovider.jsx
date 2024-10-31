import React, { useState } from 'react';
import Theamcontext from './Theamcontext';

export const Teamprovider = ({ children }) => {
    const [theme, setTheme] = useState('bg-blue');

    const changeTheme = () => {
        setTheme(theme === 'bg-blue' ? 'bg-green' : 'bg-blue');
    };

    return (
        <Theamcontext.Provider value={{ theme, changeTheme }}>
            {children}
        </Theamcontext.Provider>
    );
};
