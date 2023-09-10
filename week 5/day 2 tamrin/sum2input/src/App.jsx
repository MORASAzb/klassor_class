import { useState } from 'react'
import './App.css'

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === 'inputOne') {
      setInputOne(value);
    } else if (name === 'inputTwo') {
      setInputTwo(value);
    }
  }

  let sumMessage = 'Please enter values in both fields';

  if (inputOne !== '' && inputTwo !== '') {
    sumMessage = `Sum is ${Number(inputOne) + Number(inputTwo)}`;
  }

  return (
    <>
      <input
        type="number"
        name="inputOne"
        onChange={handleInputChange}
        placeholder='first number'
        value={inputOne}
      />
      <input
        type="number"
        name="inputTwo"
        onChange={handleInputChange}
        placeholder='second number'
        value={inputTwo}
      />
      <div>
        {sumMessage}
      </div>
    </>
  )
}

export default App
