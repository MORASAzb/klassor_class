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
        let answer = false
        const inputArray = str.trim().split("")
        
        let sum=0
        if (inputArray.length == 10) {
            inputArray[9] = inputArray[9].toUpperCase().replace("X",10)
        }
        for (let index = 0; index < inputArray.length ; index++) {
            sum = sum + (Number(inputArray[index]) * (index +1))
        }
        if ((sum % 11) == 0){
            answer = true
        }

        return answer
    }

function practiceTwo(str,markers) {
    var markers = markers.split(',').map(value=>value.trim());
    console.log(str)
    const lines = str.split('\\n');
    console.log(lines)
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (const marker of markers) {
        const markerIndex = line.indexOf(marker);
        if (markerIndex !== -1) {
            lines[i] = line.substring(0, markerIndex).trim();
            break;
        }
        }
    }

    const result = lines.join('\n');/* if you user 2 slash it will return with /n instead of goin next line const result = lines.join('\\n') */

    return result;

}
function practiceThree(seconds) {
    seconds = Number(seconds)
    if (seconds === 0) {
        return "now";
      }
    
      const units = [
        { name: "year", seconds: 31536000 },
        { name: "day", seconds: 86400 },
        { name: "hour", seconds: 3600 },
        { name: "minute", seconds: 60 },
        { name: "second", seconds: 1 },
      ];
    
      const result = [];
    
      for (const unit of units) {
        const unitValue = Math.floor(seconds / unit.seconds);
        if (unitValue > 0) {
          result.push(unitValue + " " + (unitValue > 1 ? unit.name + "s" : unit.name));
          seconds -= unitValue * unit.seconds;
        }
      }
    
      const formattedResult = result.join(", ");
      const lastCommaIndex = formattedResult.lastIndexOf(", ");
      if (lastCommaIndex !== -1) {
        return (
          formattedResult.substring(0, lastCommaIndex) +
          " and" +
          formattedResult.substring(lastCommaIndex + 1)
        );
      }
    
      return formattedResult;
    
}
function sumArrayElements(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
  }
function practiceFour(str) {
    const inputArray=str.split(",").map(value=>Number(value.trim()))
    let answer = 0 
    inputArray.unshift(-1);
    inputArray.push(-1);
    const indexOfNegativeNumbers=[]
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        if (!isPositiveNumber(element))
        {
            indexOfNegativeNumbers.push(index)
        }
    }
    for (let index = 0; index < indexOfNegativeNumbers.length; index++) {
        const indexOFNegative = indexOfNegativeNumbers[index];
        for (let j = indexOFNegative +1 ; j < indexOfNegativeNumbers.length; j++) {
            const nextindexOfNegative = indexOfNegativeNumbers[j];
            sumCheck=sumArrayElements(inputArray.slice(indexOFNegative+1, nextindexOfNegative))
            if (sumCheck> answer){
                answer = sumCheck
            }
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
            
            let userInput
            switch ( practiceNumber) {
                case "1":
                    userInput=prompt("Give me the Number !?")
                    answer=practiceOne(userInput)
                    break;
            
                case "2":
                    userInput=prompt("Give me the string !?")
                    markers=prompt("Give me the markers(seprate them with comma like  #,!) !?")
                    answer=practiceTwo(userInput,markers) 
                    break;
                case "3":
                    userInput=prompt("Give me seconds !?")
                    answer=practiceThree(userInput)
                    break; 
                case "4":
                    userInput=prompt("Give me the numbers sperate them with commali ke 1,-1,1,-15 ?")
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
