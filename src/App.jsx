import React, { useState } from 'react'
import Button from './components/Button'
const App = () => {
  const [counter, setCounter] = useState(0)
  // const [name, setName] = useState("")

  // const [details, setDetails] = useState({age: 0, city: ""})

  function increaseCount(){
    setCounter(counter+1)
  }

  // function handleInputChange(event){
  //   setName(event.target.value)
  // }

  // console.log(counter)

  return (
    <Button counter={counter} onClick={increaseCount} />
    // <div>
    //   <input type="text" value={name} onChange={handleInputChange} placeholder='name' />
    //   <input type='number' value={details.age} onChange={(e) => setDetails({...details, age: e.target.value})} placeholder='Age' />
    //   <input type='text' value={details.city} onChange={(e) => setDetails({...details, city: e.target.value})} placeholder='City' />
    //   <div> {name} of the student and {details.age} years old and lives in {details.city} and {counter} times </div>
    //   <button onClick={increaseCount}> Increase </button>
    // </div>
  )
}

export default App
