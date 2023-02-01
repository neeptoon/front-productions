import React, { useState } from 'react';
import classes from  './Counter.module.scss';

export const Counter = () => {
    const [count, setCounter] = useState(0);
    return (
        <>
            <h1 className={classes.upper}>{count}</h1>
            <button className={classes.upper} onClick={() => setCounter(count + 1)}>increment</button>
        </>
    )
}
