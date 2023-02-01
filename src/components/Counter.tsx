import React, { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCounter] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCounter(count + 1)}>increment</button>
        </>
    )
}
