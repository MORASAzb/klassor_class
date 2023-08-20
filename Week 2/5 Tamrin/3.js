const number=prompt("A number ? (Digit)")
function isPositiveNumber(input) {
  const number = parseFloat(input);
  return !isNaN(number) && number > 0;
}
function hasSumOfSquares(input) {
    for (let a = 2; a <= input; a++) {
      const bSquared =( input * input ) - ( a * a );
      const b = Math.sqrt(bSquared);
      if (b === Math.floor(b) && b > 0) {
        return true; 
      }
    }
    return false; 
  }
let answer=""
if  (isPositiveNumber(number) == true){
  for (let index = 1; index < number; index++) {
    if (hasSumOfSquares(index) == true){
      answer = answer +  (" "+index +" ")
    }
  }
}
else{
  answer="Not a valid number"
}
console.log(answer)