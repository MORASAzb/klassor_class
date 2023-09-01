function isPositiveNumber(input) 
    {
        const number = parseFloat(input);
        return !isNaN(number) && number > 0;
    }
let number
while (true) {
        number = prompt ("Give number !!!!))?")
        if (isPositiveNumber(number)) {
            break
        }
        else {
            continue
        }
    }
let answer 
answer=number.split("").map(
    (valu) => Number(valu)
).sort(function(a, b) {
    return b - a;
  }).join("")
alert(answer)