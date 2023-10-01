import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(100)

  const addValue = () => {
    setCounter(counter + 1)
    //setCounter((prevCounter) => prevCounter + 1)
    //adds twice prevCounter callback gets access to previous updated counter value
  }
  const removeValue = () => {
    let newCounter = counter - 1
    setCounter(newCounter)
  }
  return (
    <>
      <h1>React App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
