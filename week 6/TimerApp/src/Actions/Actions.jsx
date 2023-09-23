import { useEffect, useState } from 'react'
import './Actions.css'
import { formatToSeconds, millisecondsToArray } from '../timeConvertor.js';

function Actions(prop) {
    function hasNonZeroElement(arr) {
        return arr.some(element => element !== 0);
      }
      
    const zeroTime = [0,0,0,0,0,0,0,0,0]
    const deafultInedx=5
    const [decidedTime , SetDecidedTime] = useState(zeroTime)
    const [mainAction , setMainAction] =useState("Set")

    const nums = [0,1,2,3,4,5,6,7,8,9]
    const [index,setIndex] = useState(deafultInedx) 

    function inputListener(event) {
        if (index > -1 && !((index == deafultInedx) && ( Number(event.target.value) ==0 ) ))
        {
            const newTime = [...prop.time]
            newTime.shift()
            newTime.push(0)
            newTime[5] = Number(event.target.value)
            handletimer(newTime)
            setIndex(index-1)
            
        }
    }
    function handletimer(time) {
        prop.setTime(time)
        prop.setNewTimer(!prop.newTimer)
    }

    function actionHandler(event) {
        const action = event.target.value
        if (action =="Set" ) {
            if(hasNonZeroElement(prop.time) )
            
            {setMainAction(
                "Start"
            )
            SetDecidedTime(millisecondsToArray(formatToSeconds(prop.time)))
            handletimer(millisecondsToArray(formatToSeconds(prop.time)))
            }
            else{
                alert("first add time to timer")
            }
        }
        else if (action =="clear") {
            setIndex(deafultInedx)
            if (!hasNonZeroElement(decidedTime) ) {
                setMainAction(
                    "Set"
                )
            }
            else{
              
                setMainAction(
                    "Start"
                )
            }
            handletimer(decidedTime)
            prop.setIsOn(false)

        }
        else if  (action =="Start"){
            setMainAction(
                "Pause"
            )
            prop.setIsOn(true)
        }
        else if  (action =="Pause"){
            setMainAction(
                    "Resume"
                )
            prop.setIsOn(false) 
        }
        else if  (action =="Resume"){
            setMainAction(
                    "Pause"
                )
            prop.setIsOn(true)
        }
        else if((action =="Back")){
            setMainAction(
                "Set"
            )
            setIndex(deafultInedx)
            SetDecidedTime(zeroTime)
            prop.setIsOn(false)
            handletimer(zeroTime)
        }
        
    }


  return (
    <>

    <div className='buttons'>
        <div className= {mainAction=="Set" ? "btn-nums" : "d-none" }>
        {nums.map((num) => (
            <button className='btn-num' value={num} onClick={inputListener} key={num}>
            {num}
            </button>
        ))}
        </div>
        <div className={mainAction !=="Set" ? "actions  started" : "actions" }>
            <button className='mainAction' value={mainAction} onClick={actionHandler}>{mainAction}</button>
            <button value="clear" onClick={actionHandler}>clear</button>
            <div className={mainAction!=="Set" ? "back" : "back d-none" }><button value="Back" className='backbtn' onClick={actionHandler} >Back</button></div>
        </div>
        
    </div>
    </>
  )
}

export default Actions