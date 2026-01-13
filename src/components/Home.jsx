import React, { useEffect, useState } from 'react'

const Home = () => {

    const [count, setCount] = useState(0);

    //variation 1
    useEffect(() => {
        alert("ye first variation dekh raha hu")
    })

    function handleClick(){
        setCount(count + 1)
    }
  return (
    <div>
      <p>count start from {count} </p>
      <button onClick={handleClick}>Click me to increase the count </button>
    </div>
  )
}

export default Home
