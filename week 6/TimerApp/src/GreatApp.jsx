import React, { useState, useEffect } from 'react';
import './GreatApp.css'
import Timer from "./Timer/Timer.jsx"
import Actions from "./Actions/Actions.jsx"
function GreatApp() {
  const zeroTime = [0,0,0,0,0,0,0,0,0]
  const [time,setTime] = useState(zeroTime)
  const [isOn , setIsOn] = useState(false)
  const [timer, setTimer] = useState([]);
  const [newTimer, setNewTimer ] = useState(false) 
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }



useEffect(() => {
    let buildTimer = <Timer key={getRandomNumber(0,1000000)}  time={time} isOn={isOn} setTime={setTime}/>;
    setTimer(buildTimer);

    return () => {
      buildTimer = <Timer key={getRandomNumber(0,1000000)}  time={zeroTime} isOn={false} setTime={setTime}/>
      setTimer(buildTimer)
    };
    
}, [isOn ,newTimer ]);



  return (
    <>
    <div className='container'>
      {timer}
    </div>
    <div className='container '>
      <Actions time={time} setTime={setTime} isOn={isOn} setIsOn={setIsOn} setNewTimer={setNewTimer} newTimer={newTimer} />
    </div>
    </>
  )
}

export default GreatApp




