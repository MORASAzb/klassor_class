
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

function sumTowDigit(num1,num2) {

    return num1+num2 ;
}

function pow(num,powerNum){
    let poweredNumber=1
for (let index = 0; index < powerNum; index++) {
    poweredNumber *= Number(num)
}
return poweredNumber
}
function name(str1,str2) {
   if( str1.length > str2.length) {
    return str1 + str2+ str1
    }
    else{
        return str2 + str2 + str3
    }
}