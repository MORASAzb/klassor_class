import './style.css'


const condidates = []
const pushBtn = document.querySelector('.push')
const printBtn = document.querySelector('.print')
const clearBtn = document.querySelector('.clear')
const whiteBtn = document.querySelector('.white')
const greenBtn = document.querySelector('.green')
const blueBtn = document.querySelector('.blue')
const printerContainer=document.querySelector('.printer_container')
const resetBtn=document.querySelector('.reset')

function push() {
  const condidate = document.querySelector('input')
  let message="Pleast first fill the input!"
  if (!condidate.value=="") {
    condidates.push(condidate.value)
    message=`Here is the [${condidates}] that already added by you.you can print now or keep adding till you done.`
    condidate.value=""
  }  
  alert(message)
}

function printCondidates() {
  let message="Pleast first add condidates by entring their names!"
  if (!condidates.length==0) {
    printerContainer.textContent = condidates
  }  
  else{
    alert(message)
  }
}

function clearCondidates() {
  let message="You wiped them all!"
  if (condidates.length > 0) {
      condidates.length = 0
      printerContainer.textContent ='Click on print button to see the condidates you already added here !'
  }
  else{
    message ="Nothing to clear"
  }
  alert(message)
}

function blue() {
  printerContainer.style.backgroundColor = "blue"
}
function white() {
  printerContainer.style.backgroundColor = "white"
}
function green() {
  printerContainer.style.backgroundColor = "green"
}
function reset() {
  printerContainer.style.backgroundColor = ""
}

pushBtn.addEventListener('click',push)
printBtn.addEventListener('click',printCondidates)
clearBtn.addEventListener('click',clearCondidates)
whiteBtn.addEventListener('click',white)
greenBtn.addEventListener('click',green)
blueBtn.addEventListener('click',blue)
resetBtn.addEventListener('click',reset)


function mouseenter() {
  responsive_btn.style.backgroundColor = "red"
}
function mouseleave() {
  responsive_btn.style.backgroundColor = ""

}
responsive_btn.addEventListener('mouseenter',mouseenter)
responsive_btn.addEventListener('mouseleave',mouseleave)