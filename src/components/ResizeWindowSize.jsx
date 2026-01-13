import React, { useEffect, useState } from 'react'

const ResizeWindowSize = () => {
    const [windowsize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize(){
            setWindowSize(window.innerWidth)

            window.addEventListener('resize', handleResize())

            return() => {
                window.removeEventListener('resize', handleResize())
            }
        }
    
    }, [])
  return (
    <div>
      <h1>window width :{windowsize} </h1>
    </div>
  )
}

export default ResizeWindowSize
