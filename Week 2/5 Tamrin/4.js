const anything=prompt("Anything ! ?");
let answer = "";
for (let index = 0; index < anything.length; index++) {
    answer = answer + anything [index] + anything [index];
    
}
alert (answer);