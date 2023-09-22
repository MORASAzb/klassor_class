import { useState } from 'react'
import Fullname from "./fullname/Fullname.jsx"
import './App.css'
import Fruits from "./Fruits.jsx"

function App() {
  const [fruits, setfruits] = useState(
    [
    ]
  
  )
  const [fruit , setfruit] = useState("")

function changeFruit(event) {
  setfruit(event.target.value)
  
}
function pushFruit() {
  setfruits([
    ...fruits,
    fruit]
  )
  setfruit("")
}
  return (
    <>
      <input type="text" name="fruit" value={fruit} onChange={changeFruit}/>
      <button onClick={pushFruit}>Add</button>
      <Fruits fruits={fruits}/>
    </>
  )
}

export default App
