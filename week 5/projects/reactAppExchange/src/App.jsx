import { useState } from 'react'

import './App.css'

function App() {
  const [currencyFromInput, setFirstCurrency] = useState(0)
  const [currencyToInput, setsecondCurrency] = useState(0)
  const [currencyFrom, setcurrencyFrom] = useState('USD')
  const [currencyTo, setcurrencyTo] = useState('RIAL')
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

function seletedCurrencyHandleChange(event) {
        if (event.target.name == "currency-from"){
          setcurrencyFrom(event.target.value)
          const newevent= {target:{name:'currency-from-value',value:1}}
          const rate = ConvertorRate[event.target.value][currencyTo]
          changeInputHandler(newevent,rate)
        }
        else{
          setcurrencyTo(event.target.value)
          const newevent= {target:{name:'currency-to-value',value:1}}
          const rate = ConvertorRate[currencyFrom][event.target.value]
          changeInputHandler(newevent,rate)
        }
}
function changeInputHandler(event,rate) {
  const { name, value } = event.target;
  if (rate ==undefined) {
    rate=ConvertorRate[currencyFrom][currencyTo]
  }
  
  if (name === 'currency-from-value') {

    setFirstCurrency(value);
    setsecondCurrency((value*rate).toFixed(2))

  } else if (name === 'currency-to-value') {
    setsecondCurrency(value)
    setFirstCurrency((value*(1/rate)).toFixed(2))
  }     
}
  return (
    <>
    <div className="container">
      <h1>
          Currency Calculator
      </h1>
      <div className="band">

      </div>
      <div className='rate'>
        1 USD = 5.400 BRL
      </div>
      <div className="date">
        Currency quote day : felan
      </div>
      <div className="inputrow">
        <input type="number" name="currency-from-value" onChange={changeInputHandler} value={currencyFromInput}/>
        <select name="currency-from" value={currencyFrom} onChange={seletedCurrencyHandleChange} >
          <option value="USD" >USD</option>
          <option value="RIAL" >RIAL</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
      <div className="inputrow">
        <input type="number" name="currency-to-value" onChange={changeInputHandler} value={currencyToInput} />
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
