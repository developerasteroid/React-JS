import React from 'react'
import { useState } from 'react'

function UseStateHook() {
    const [count, setCount]= useState(0);
    // let counter = 0;

    function addCount(){
        // counter = counter + 1;
        // console.log(counter);

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);


        // setCount((prevCounnt) => prevCounnt + 1);
        // setCount((prevCounnt) => prevCounnt + 1);
        setCount((prevCounnt) => prevCounnt + 1);
    }

    function removeCount(){
        // counter = counter - 1;
        // console.log(counter);

        setCount(count - 1);
    }

  return (
    <div className='useStateHook'>
        <h2>UseState</h2>
        <h3>counter: {count}</h3>
        <button onClick={removeCount}>Decrement</button> {' '}
        <button onClick={addCount}>Increment</button>
    </div>
  )
}

export default UseStateHook