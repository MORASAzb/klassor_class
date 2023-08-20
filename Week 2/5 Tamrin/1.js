const number=prompt("A number ? (Digit)")
function isPositiveNumber(input) {
    const number = parseFloat(input);
    return !isNaN(number) && number > 0;
  }
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
if( isPositiveNumber(number) == true)
    {   
        if (isPrime(number) == true){
            answer="it's a Prime"
        }
        else{
            answer ="Not a Prime"
        }
        }
else
    {
        answer="Not a valid number"
        }
alert(answer)