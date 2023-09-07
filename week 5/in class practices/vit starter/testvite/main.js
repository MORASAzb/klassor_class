import sum from "./sum.js" ;
import pow from "./pow.js"
import * as subtract from "./subtract.js"
import {multiple} from "./multiple.js"
import sub from "./subtract.js"
import subarray from "ml-array-sum"


console.log(sum([1,2]))
console.log(pow([2,3]))
console.log(subtract.subtract([5,2]))
console.log(multiple([2,5]))
console.log(sub([9,7]))
console.log(subarray([1,2,3,4]))


const item = document.querySelectorAll('.wrapper-box>.item')
item.forEach(element => {
    console.log(element.attributes.getNamedItem('class').value)
});


const clacPoweredNum=document.querySelector('button')
function name() {
    console.log(document.querySelector('.number'))
    const inputNum = Number(document.querySelector('.number').value)
    const inputPow =Number(document.querySelector('.power_number').value)
    alert(pow([inputNum,inputPow]))
}
clacPoweredNum.addEventListener("click",name)





