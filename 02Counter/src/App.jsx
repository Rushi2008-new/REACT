import { useState } from 'react'
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(5)

  const addValue = () => {
    setCounter(counter+1)  
  }

  const removeValue = () => {
    setCounter(counter-1)

  }
  return (
    <>
      <div class="main">
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

    <div id="btn">
      <button class="bn" onClick={addValue}>Add value</button>
      <button class="bn" onClick={removeValue}>Remove value</button>
      </div>
      </div>
    </>
  )
}

export default App
