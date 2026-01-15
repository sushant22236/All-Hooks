import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    //const[color, setColor] = useState("green");

   
    function handleIncrease(){
        setCount(count + 1);
    }

    function handleDecrease(){
        setCount(count - 1);
    }

    function handleReset(){
        setCount(0);
    }

  return (
    <div>
      <h1 style={{color: count < 0 ? "red" : "black"}}>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset to 0</button>
    </div>
  )
}

export default Counter
