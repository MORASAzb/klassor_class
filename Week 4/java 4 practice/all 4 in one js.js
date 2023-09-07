// You can test all te practic interactivly with opening html file
const vowelLetters = ["a","A","e","E","o","O","i","I","u","U"]
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
        let answer = str
        answer=answer.split("").filter((value) => !vowelLetters.includes(value) ).join("")
        return answer
    }

function practiceTwo(array) {
        let names = "Nobody"
        if (array.length > 1 ){
            array[array.length - 1] = " and " + array[array.length - 1];
            names = array.join(", ").replace((", "+array.at(-1)), array.at(-1))
        }
        else if(array.length === 1){
            names = array[0]
        }
        let like = array.length < 2 ? "likes" : "like"
        const answer = `${names} ${like} this.` 
        return answer
}
function practiceThree(array1,array2) {
    const fillteredArray1 =  array1.filter((value => !array2.includes(value)))
    const filteredArray2 = array2.filter((value => !array1.includes(value)))
    answer= [...fillteredArray1,...filteredArray2]
    return answer
}
function practiceFour(str) {
    let answer = 0
    array=str.toUpperCase().split("")
    while (array.length != 0) {
        const toCheck = array.shift()
        if (array.includes(toCheck) ) {
            answer++   
            array=array.filter((value)=> !(value==toCheck)) 
        }
    }
    return answer
}



let needToTestMore = true    
while (needToTestMore) {
    const practiceNumber=prompt("tell me witch practice you wanna test amir (Only digit)?")
    let answer
    if (isPositiveNumber(practiceNumber) && practiceNumber<5)
        {   
            let userInputCondition =false
            let userInput
            switch ( practiceNumber) {
                case "1":
                    userInput=prompt("Give me a anything !?")
                    answer=practiceOne(userInput)
                    break;
            
                case "2":
                    let userInputs = []
                    while (true)
                    {
                        userInput=prompt(`Give me names one by one. when you done enter -1 !?`)
                        if (userInput != "-1"){
                        userInputs.push(userInput)} 
                        else{
                                break
                            }
                    }
                    answer=practiceTwo(userInputs) 
                    break;
                case "3":
                    let userInputs1 = []
                    let userInputs2 = []
                    while (true)
                    {
                        userInput=prompt("Give me a number for first array! (-1 to go for next array)?")

                        if (isNumber(userInput)) {
                            if (userInput != "-1") {
                                userInputs1.push(userInput)
                            }
                            else{
                                break
                            }
                        }
                        else{
                            answer = "You need to enter a digit and positive !"
                            userInputCondition = false
                            alert (answer)
                        }
                    }
                    while (true)
                    {
                        userInput=prompt("Give me a number for second array! (-1 when you done)?")

                        if (isNumber(userInput)) {
                            if (userInput != "-1") {
                                userInputs2.push(userInput)
                            }
                            else{
                                break
                            }
                        }
                        else{
                            answer = "You need to enter a digit and positive !"
                            userInputCondition = false
                            alert (answer)
                        }
                    }
                    answer=practiceThree(userInputs1,userInputs2)
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
