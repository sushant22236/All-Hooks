import React, { use, useEffect, useState } from 'react'

const Home = () => {

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    //variation 1
    // useEffect(() => {
    //     alert("ye har baar render hoga")
    // })

    //Variation 2

    // useEffect(() => {
    //     alert("Ab ek baar hi alert ayega jab first time render hoga page")
    // }, [])

    //variation 3

    // useEffect(() => {
    //     alert("ye jab jab count increase hoga tab render hoga")
    // }, [count])

    //variation 4

    // useEffect(() => {
    //     alert("ye count ya total dono mai se koi bhi increase hoga tho render hoga")
    // }, [count, total])

    //variation 5 - cleanup function
    //is baar humne cleanup function lagaya hai jo ki component unmount hone par chlega
    
    useEffect(() => {
        alert("count is updated")
        return () => {
            alert("cleanup function called")
        }
    }, [count])

    function handleClick(){
        setCount(count + 1)
    }

    function handleTotalClick(){
        setTotal(total+1)
    }
  return (
    <div>
      <p>count start from: {count} </p>
      <button onClick={handleClick}>Click me to increase the count </button>
      <p>total start from: {total} </p>
      <button onClick={handleTotalClick}>Click me to increase the total</button>
    </div>
  )
}

export default Home
