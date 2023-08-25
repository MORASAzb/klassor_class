
userInput=""
const newArray = [];
while (userInput != "quit") {
    userInput =prompt("put 'quit for stop")
    newArray.push(userInput)
}
let answer=""
for (let index = 0; index < newArray.length - 1; index++) {
    answer =answer +newArray[index]
    if (index < newArray.length - 2)
    {
        answer = answer +","
    }
}
console.log(answer)
