import { useState } from 'react'

import './App.css'

function App() {
  const [inputOne, setInputOne] = useState(0)
  const [inputTwo, setInputTwo] = useState(0)
  function changeInputOne(event) {
    setInputOne(Number(event.target.value));
  }
  function changeInputTwo(event) {
    setInputTwo(Number(event.target.value));
  }
  return (
    <>
    <input type="number" onChange={changeInputOne} value={inputOne}/>
    <input type="number"onChange={changeInputTwo} value={inputTwo} />
    <div>
       Sum is {inputTwo+inputOne}
    </div>
    </>
  )
}

export default App
