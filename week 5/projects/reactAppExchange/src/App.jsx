import { useState } from 'react'
import './App.css'

function App() {
  const [currencyFromValue, setCurrencyFromValue] = useState(0)
  const [currencyToValue, setCurrencyToValue] = useState(0)
  const [currencyFrom, setcurrencyFrom] = useState('USD')
  const [currencyTo, setcurrencyTo] = useState('RIAL')
  const [currentTime, setCurrentTime] = useState(new Date());



  const ConvertorRate={
    RIAL:{
      USD : 1/50000,
      CAD :1/40000,
      RIAL :1
    }
    ,
    USD:{
      USD : 1,
      CAD :1.25,
      RIAL :50000
    }
    ,
    CAD:{
      USD : 0.8,
      CAD :1,
      RIAL :40000
    }
  }
  const fixedNum = {USD:2,CAD:2,RIAL:0}

function seletedCurrencyHandleChange(event) {
        if (event.target.name == "currency-from"){
          setcurrencyFrom(event.target.value)
        }
        else{
          setcurrencyTo(event.target.value)
        }
        setCurrencyFromValue(0);
        setCurrencyToValue(0)

}

function changeInputHandler(event) {
  const { name, value } = event.target;
  if (name === 'currency-from-value') {
    setCurrencyFromValue(value);
    setCurrencyToValue((value*rate).toFixed(fixedNum[currencyTo]))

  } else if (name === 'currency-to-value') {
    setCurrencyToValue(value)
    setCurrencyFromValue((value*(1/rate)).toFixed(fixedNum[currencyFrom]))
  }     
}

let rate = ConvertorRate[currencyFrom][currencyTo]
const timerInterval = setInterval(() => {
  setCurrentTime(new Date());
}, 1000); 


  return (
    <>
    <div className="container">
      <h1>
          Currency Calculator
      </h1>
      <div className="band">

      </div>
      <div className='rate'>
        1 {currencyFrom} = {rate} {currencyTo}
      </div>
      <div className="date">
        Currency quote day : {currentTime.toLocaleTimeString()}
      </div>
      <div className="inputrow">
        <input type="number" name="currency-from-value" onChange={changeInputHandler} value={currencyFromValue} />
        
        <select name="currency-from" value={currencyFrom} onChange={seletedCurrencyHandleChange} >
          <option value="USD" >USD</option>
          <option value="RIAL" >RIAL</option>
          <option value="CAD">CAD</option>
        </select>
      </div>

      <div className="inputrow">
        <input type="number" name="currency-to-value" onChange={changeInputHandler} value={currencyToValue} />
        <select name="currency-to"value={currencyTo} onChange={seletedCurrencyHandleChange} >
          <option value="USD" >USD</option>
          <option value="RIAL" >RIAL</option>
          <option value="CAD">CAD</option>
      </select>
      </div>
    </div>
    
    </>
  )
}

export default App
