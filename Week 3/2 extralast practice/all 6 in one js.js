// You can test all te practic interactivly with opening html file
function isPositiveNumber(input) 
    {
        const number = parseFloat(input);
        return !isNaN(number) && number > 0;
    }

    function capitalizeWords(str) {
        return str.split(/[_-]/)
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
function practiceOne(str)
    {      
        let answer = ""
        let capitalized
        answer=str.split(/[_-]/)[0]
        capitalized = capitalizeWords(str)
        capitalized[0]=answer
        answer = capitalized.join("")
        return answer
    }

function practiceTwo(str) {
        let answer = false
        let sumOfP2=0
        for (let index = 0; index < str.length; index++) {
            sumOfP2+=((str[index])**str.length)

        }
        if (sumOfP2 == str) {
            answer =true
        }
        return answer
    
}

let needToTestMore = true    
while (needToTestMore) {
    const practiceNumber=prompt("tell me witch practice you wanna test amir (Only digit)?")
    let answer
    if (isPositiveNumber(practiceNumber) && practiceNumber<3)
        {   
            let userInputCondition =false
            let userInput
            switch ( practiceNumber) {
                case "1":
                    userInput=prompt("Give me a INPUT to get the count of its vowel Letters!?")
                    answer=practiceOne(userInput)
                    break;
            
                case "2":
                    while (userInputCondition != true)
                    {
                        userInput=prompt("Give me a Positive number to check its narcissistic behaviour!?")
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
                    answer= "You gave us only 2 practice to solve !!!!"
                }
            alert (answer)
            continue
        } 
    needToTestMore =confirm("Do you wanna test more from practices ?")
    continue
}
