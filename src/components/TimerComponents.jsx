import React, { useState, useEffect} from 'react'

const TimerComponents = () => {

    const [time , setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval running")
            setTime(prevTime => prevTime + 1);
        },1000)

        return () => {
            console.log("Cleaning up the interval")
            clearInterval(interval);
        }
    }, [])

  return (
    <div>
      <h1>Count time: {time}</h1>
    </div>
  )
}

export default TimerComponents
