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
let sum=0
for (let index = 0; index < numbers.length; index++) {
    sum += Number(numbers[index]);
    
}
average=sum/numbers.length;
average = average + "";
for (let index = 0; index < average.length; index++) {
    if (average[index]== "." )
    {
        average = average.substring(0, index + 3);
        break; 
    }
    
}
console.log(average);