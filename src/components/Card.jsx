import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} placeholder='name' />
      <p>Name variable ki value inside card {props.name} </p>
    </div>
  )
}

export default Card
