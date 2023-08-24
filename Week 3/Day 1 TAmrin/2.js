function isPositiveNumber(input) {
    const number = parseFloat(input);
    return !isNaN(number) && number > 0;
  }
let isMore=true;
const numbers=[];
while (isMore ==true) {
const number = prompt("your number?")
if (isPositiveNumber(number)) {
    numbers.push(number);
}

isMore = confirm("still left some numbers ?");
}

let num1=Number(numbers[0]);
let num2=Number(numbers[1]);
if (num2 < num1)
{
    num2 =Number(numbers[0])
    num1=Number(numbers[1]);
}
for (let index = 2; index < numbers.length; index++) {
    if( Number(numbers[index]) < num2  )
    {
        if (Number(numbers[index]) < num1){
            num2= num1
            num1 =  Number(numbers[index])
        }
        else{
            num2 =Number(numbers[index])
        }
    }
    
}
answer=num1+num2
console.log(answer);