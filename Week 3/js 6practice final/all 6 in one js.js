// You can test all te practic interactivly with opening html file
function isPositiveNumber(input) 
    {
        const number = parseFloat(input);
        return !isNaN(number) && number > 0;
    }
    function isITVowelLetters(str) {
        const vowelLetters = ["a","A","e","E","o","O","i","I","u","U"]
        if (vowelLetters.includes(str)) {
            return true
        }
        return false
    }
function practiceOne(str)
    {      
        let answer = 0
        for (let index = 0; index < str.length; index++) {
            if (isITVowelLetters(str[index])) {
                answer++
            }
        }
        return answer
    }
    function powerTwo(digit) {
        return digit ** 2
        
    }
function practiceTwo(str) {
        let answer = ""
        for (let index = 0; index < str.length; index++) {
            answer += powerTwo(str[index])
        }
        return answer
    
}
function practiceThree(array) {
    let answer = 0
    for (let index = 0; index < array.length; index++) {
        if (isPositiveNumber(array[index])) {
            answer += Number(array[index])
        }
    }
    return answer

}
function practiceFour(str) {
    //it's working only because in practice mentioned that string only cotains letter and nothing else !
    let answer = true
    asciiNumber=str.charCodeAt()
    for (let index = 0; index < str.length; index++) {
        for (let j = index+1; j < str.length; j++) {
            if (str.charCodeAt(index) == str.charCodeAt(j) || str.charCodeAt(index) == (str.charCodeAt(j) + 32)  || str.charCodeAt(index) == (str.charCodeAt(j) - 32) )   {
                answer = false
                break
            }
        }
    }
    return answer

}

function practiceFive(text,repeat) {
    let answer=""
    for (let index = 0; index < repeat; index++) {
        answer+=text

    }
    return answer
    
}
function practiceSix(number)
    {  
        fiboArray=[1,1]
        while (fiboArray.at(-1) <= number) {
            newFibNumber = fiboArray.at(-1) + fiboArray.at(-2)
            if (newFibNumber <= number) {
                fiboArray.push( newFibNumber)
            }
            else {
                break
            }
            
        }
        return fiboArray
    }
let needToTestMore = true    
while (needToTestMore) {
    const practiceNumber=prompt("tell me witch practice you wanna test amir (Only digit)?")
    let answer
    if (isPositiveNumber(practiceNumber) && practiceNumber<7)
        {   
            let userInputCondition =false
            let userInput
            if (practiceNumber == 1) 
            {
                userInput=prompt("Give me a INPUT to get the count of its vowel Letters!?")
                answer=practiceOne(userInput)
            }
            else if(practiceNumber == 2)
            {   
                while (userInputCondition != true)
                {
                    userInput=prompt("Give me a series of numbers to get the powered 2 of each of them !?")
                    if (isPositiveNumber(userInput)) {
                        userInputCondition =true
                    }
                    else{
                        answer = "You need to enter a digit and positive !"
                        userInputCondition = false
                        alert (answer)
                    }
                }
                answer=practiceTwo(userInput)
            }
            else if(practiceNumber == 3)
            {   
                let countOfNumbers
                while (userInputCondition != true)
                {
                    countOfNumbers=prompt("How many number you wanna give us (digit)!?")
                    if (isPositiveNumber(countOfNumbers)) {
                        userInputCondition =true
                        countOfNumbers = Number(countOfNumbers)
                    }
                    else{
                        answer = "You need to enter a digit and positive !"
                        userInputCondition = false
                        alert (answer)
                    }
                }
                let count = 1
                let userInputs = []
                while (count < (countOfNumbers+1) )
                {
                    userInput=prompt(`Give me number ${count} !?`)
                    userInputs.push(userInput) 
                    count++
                }
                answer=practiceThree(userInputs)
            }
            else if(practiceNumber == 4)
            {   
                userInput=prompt(`Give me anything !?`)
                answer=practiceFour(userInput)
            }
            else if(practiceNumber == 5)
            {   
                userInput=prompt(`Give me anything !?`)
                let userInput2
                while (userInputCondition != true)
                {
                    userInput2=prompt("How many times you wanna repeat it !?")
                    if (isPositiveNumber(userInput2)) {
                        userInputCondition =true
                    }
                    else{
                        answer = "You need to enter a digit and positive !"
                        userInputCondition = false
                        alert (answer)
                    }
                }
                answer=practiceFive(userInput,userInput2)
            }
            else if(practiceNumber == 6)
            {   
                while (userInputCondition != true)
                {
                    userInput=prompt(`Give me a number (digit) !?`)
                    if (isPositiveNumber(userInput)) {
                        userInputCondition =true
                    }
                    else{
                        answer = "You need to enter a digit and positive !"
                        userInputCondition = false
                        alert (answer)
                    }
                }
                answer=practiceSix(userInput)
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
                    answer= "You gave us only 6 practice to solve !!!!"
                }
            alert (answer)
            continue
        } 
    needToTestMore =confirm("Do you wanna test more practice ?")
    continue
}
