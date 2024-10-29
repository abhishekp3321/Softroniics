import React, { useEffect, useState } from 'react'

export const Callback = () => {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    useEffect(() => {
        console.log("repeat");
    }, [count2,count1]);



return (
    <div>
        <h1>{count1}</h1>
        <h1>{count2}</h1>

        <button onClick={() => setcount1(count1 + 1)}>increment</button>
        <button onClick={() => setcount2(count2 - 1)}>decrement</button>

    </div>
)
}
