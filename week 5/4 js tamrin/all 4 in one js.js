// You can test all te practic interactivly with opening html file

function isNumber(input) 
    {
        const number = parseFloat(input);
        return !isNaN(number) ;
    }



function practiceOne(str)
    {      
        let answer
        const inputArray = str.split(" ")
        //[1asd,asd2,7sad,8asd,5asd]
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
        let hours = Math.floor(inputNum / (60*60))
        if (hours < 10) {
            hours ="0"+ String(hours)
        }
        let minutes= Math.floor((inputNum - (hours*3600))/ 60)
        if (minutes < 10) {
            minutes= "0"+String(minutes)   
        }
        let seconds = inputNum -(hours*3600) - (minutes*60)
        if (seconds < 10){
            seconds = "0"+String(seconds) 
        }
        let answer = `${hours}:${minutes}:${seconds}`

        return answer
}
function practiceThree(str) {
        const inputArray=str.split(",").map((value => value.trim())).map((value => value>255? 255:value)).map((value => value<0? 0:value))
        const HexaArray = inputArray.map((value) => Number(value).toString(16).padStart(2, '0'))
        let answer = "#"+HexaArray.join("").toUpperCase()
    return answer
}
function practiceFour(str) {
    //"asdasdasd"
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
    let digitPart = str.substring(lastString+1,inputArray.length)
    let stringPart=str.substring(0, lastString+1)
    let stringAnswer = stringPart
    let digitAnswer= +digitPart +1

    const lenghtOfDigit =inputArray.length- lastString -1
    while (!(String(digitPart).length == String(digitAnswer).length) && String(digitPart).length != 0 ) {
        digitAnswer = "0"+ digitAnswer
    }
    const answer = stringAnswer + digitAnswer
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
