import React, { useState } from 'react'

export const Calculator = () => {
    const [input, setinput] = useState('')
    const [result, setresult] = useState('')

    const handleclick = (value) => {
        setinput(input + value)
    }

    const handleCalculate = () => {
        try {
            setresult(eval(input))
        } catch (e) {
            console.log(e.message);
            setresult('syntax error')
        }
    }
    const RRR = () => {
        setinput('')
        setresult('')

    }
    const CCC = () => {
        setinput(input.slice(0, -1))
    }


return (
    <div className='flex justify-center flex-col min-h-screen  items-center'>
        <div className='bg-gray-900 text-black rounded-lg  shadow-lg w-80 p-4'>
            <div className='text-white text-4xl'>{input}</div>
            <div className='text-white text-2xl' >{result}</div>
            <div className='bg-gray-800  grid grid-cols-4 gap-y-2 '>
                <button className='w-16 h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('1')}>1</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('2')}>2</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('3')}>3</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('+')}>+</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('4')}>4</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('5')}>5</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('6')}>6</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('-')}>-</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('7')}>7</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('8')}>8</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('9')}>9</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('*')}>*</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('0')}>0</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('.')}>.</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleCalculate('=')}>=</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={() => handleclick('/')}>/</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={CCC}>c</button>
                <button className='w-16 h-16w-full h-16 bg-orange-500 rounded-full shadow-lg' onClick={RRR}>ac</button>

            </div>
        </div>
    </div>
)

}
