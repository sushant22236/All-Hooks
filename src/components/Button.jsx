import React from 'react'

const Button = (props) => {
  return (
    <div>
        <p>{props.counter} times</p>
        <button onClick={props.onClick}> click me</button>
    </div>
  )
}

export default Button
