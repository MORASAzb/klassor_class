import { useEffect, useState } from 'react'
import './Timer.css'
import { formatToSeconds, millisecondsToArray } from '../timeConvertor.js';
function Timer(prop) {

      const [time, setTime] = useState(prop.time);


    let newIntervalId =""
    function timerStarter() {
          if (prop.isOn){
          let startedTime= Date.now();
          newIntervalId = setInterval(() => {
          console.log("interval working to test when pause")
          const currentTime = Date.now();
          const elapsedTime = currentTime - startedTime;
          const timeRemaining = formatToSeconds(prop.time) - (elapsedTime );
          if (timeRemaining >= 0 ) {
            const newTimeRemaining = millisecondsToArray(timeRemaining);
            setTime(newTimeRemaining)
            prop.setTime(newTimeRemaining)
          } else {
            setTime([0,0,0,0,0,0,0,0,0])
            prop.setTime([0,0,0,0,0,0,0,0,0])
            clearInterval(newIntervalId)
            document.getElementsByClassName("backbtn")[0].click()
            alert("timer reached")
          }
        }, 21);

        }
        
      }

    useEffect(() => {
          timerStarter();
        return () => {
          clearInterval(newIntervalId)
        };
    }, []);


  return (
    <>
    <div className='timer-container'  >
        <div className='time'>
            {time.filter((value, index )=> index<2  )} : {time.filter((value, index )=> (index>1 && index<4)  )} : {time.filter((value, index )=> (index>3 && index<6)  )}
        </div>
        <label htmlFor="">{time.filter((value, index )=> index>5  )}</label>
    </div>

    </>
  )
}

export default Timer