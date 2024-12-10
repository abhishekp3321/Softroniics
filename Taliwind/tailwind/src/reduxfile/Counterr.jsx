import React from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Slice';
export const Counterr = () => {

    const data = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    console.log(data);
    return (
        <div>
            <div>{data}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}