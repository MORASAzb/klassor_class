import { useState } from 'react'
import './App.css'

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  function changeInputOne(event) {
    setInputOne(event.target.value);
  }

  function changeInputTwo(event) {
    setInputTwo(event.target.value);
  }

  let sumMessage = 'Please enter values in both fields';

  if (inputOne !== '' && inputTwo !== '') {
    sumMessage = `Sum is ${Number(inputOne) + Number(inputTwo)}`;
  }

  return (
    <>
      <input type="number" onChange={changeInputOne} placeholder='first number' value={inputOne} />
      <input type="number" onChange={changeInputTwo} placeholder='second number' value={inputTwo} />
      <div>
        {sumMessage}
      </div>
    </>
  )
}

export default App
