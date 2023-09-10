// You can test all te practic interactivly with opening html file
function isPositiveNumber(input) 
    {
        const number = parseFloat(input);
        return !isNaN(number) && number > 0;
    }
function isNumber(input) 
    {
        const number = parseFloat(input);
        return !isNaN(number) ;
    }
function practiceOne(str)
    {      
        let answer
        const inputArray = str.split(" ")
        let answerArray=[]
        for (let index = 1; index < 10; index++) {
            const indexFiltered = inputArray.filter( (value)=> value.split("").includes(String(index)))
            answerArray=[...answerArray,...indexFiltered]
        }
        answer = answerArray.join(" ")
        return answer
    }

function practiceTwo(str) {
        const inputNum=Number(str)
        const hours = Math.floor(inputNum / (60*60))
        const minutes= Math.floor((inputNum - (hours*3600))/ 60)
        const seconds = inputNum -(hours*3600) - (minutes*60)
        const answer = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        return answer
}
function practiceThree(str) {
        const inputArray=str.split(",").map((value => value.trim())).map((value => value>255? 255:value)).map((value => value<0? 0:value))
        const HexaArray = inputArray.map((value) => Number(value).toString(16).padStart(2, '0'))
        const answer = "#"+HexaArray.join("").toUpperCase()
    return answer
}
function practiceFour(str) {
    const inputArray=str.split("")
    let lastString=inputArray.length -1
    for (let index = inputArray.length-1; index >-1 ; index--) {
        const element = inputArray[index];
        if (!isNumber(element))
        {
            lastString = index
            break
        }
    }
    const digitPart = str.substring(lastString+1,inputArray.length)
    const stringPart=str.substring(0, lastString+1)
    const digitAnswer= +digitPart +1
    const answer = stringPart + String(digitAnswer).padStart(digitPart.length, '0')
    return answer
}



let needToTestMore = true    
while (needToTestMore) {
    const practiceNumber=prompt("tell me witch practice you wanna test amir (Only digit)?")
    let answer
    if (isPositiveNumber(practiceNumber) && practiceNumber<5)
        {   
            
            let userInput
            switch ( practiceNumber) {
                case "1":
                    userInput=prompt("Give me the string !?")
                    answer=practiceOne(userInput)
                    break;
            
                case "2":
                    userInput=prompt("Give me the string !?")
                    answer=practiceTwo(userInput) 
                    break;
                case "3":
                    userInput=prompt("Give me the rgb !?")
                    answer=practiceThree(userInput)
                    break; 
                case "4":
                    userInput=prompt("Give me anything?")
                    answer=practiceFour(userInput)                   
                    break;
            }
            alert (answer)
        }
    else
        {   
            if (!isPositiveNumber(practiceNumber))
                {
                    answer= "Told you only digit !!!!!!!!!"
                }
            else
                {
                    answer= "You gave us only 4 practice to solve !!!!"
                }
            alert (answer)
            continue
        } 
    needToTestMore =confirm("Do you wanna test more practice ?")
    continue
}
