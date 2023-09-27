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
        function areAllElementsSame(arr, value) {
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] !== value) {
                return false;
              }
            }
            return true;
          }
        let answer = 0
        const board = str.split("").map(value=>Number(value))
        console.log(board)
        const winderConditions=[ [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]]
        for (let index = 2; index > 0; index--) {
            console.log(index)
            const iswiiner= winderConditions.map((value ) => value.map((value) => board[value])).filter(value => areAllElementsSame(value,index))
            if (iswiiner.length >0){
                answer = index
                break
            }
        }
        if (answer == 0){
            if (board.includes(0)){
                answer =-1
            }
        }

        return answer
    }

function practiceTwo(str) {
        const numbers  = str.split(",").map(value => Number(value))
        const answer =[]
        let index = 0
        let startedindex= index
        while (index < numbers.length) {
            
            if (!(numbers[index] == numbers[index+1] - 1 )){
                answer.push(startedindex == index? numbers[index] : [numbers[startedindex] + "-" + numbers[index]])
                startedindex = index +1
            }
            index++
        }
        
        return answer.join(",")
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
                    userInput=prompt(`Give me the board only numbers like this
                    if board :
                     [[0, 0, 1]
                     ,[0, 1, 2]
                     ,[2, 1, 0]]
                     u enter  001012210
                    !?`)
                    answer=practiceOne(userInput)
                    break;
            
                case "2":
                    userInput=prompt("Give me the number seprated by comma !?")
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
                    answer= "You gave us only 4 practice to solve !!!!"
                }
            alert (answer)
            continue
        } 
    needToTestMore =confirm("Do you wanna test more practice ?")
    continue
}
