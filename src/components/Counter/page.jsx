"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
             <h1>counter : {counter}</h1>
      <button onClick={()=> setCounter(counter + 1)}>Increase</button>
      <button onClick={()=> setCounter(counter - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;