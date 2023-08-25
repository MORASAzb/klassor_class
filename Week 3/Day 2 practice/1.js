function CharcterValueFinder(str) {
    if (['a','A' ,'e','E','i','I','o','O','u','U','L','l','N',"n",'R','r','S','s','T','t'].includes(str)) {
        return 1;
    } else if (['d','D','G','g'].includes(str)) {
        return 2;
    } else if (['b','B','C','c','M','m','P','p'].includes(str)) {
        return 3;
    } else if (['f','F','H','h','v','V','w','W','Y','y'].includes(str)) {
        return 4;
    } else if (['k','K'].includes(str)) {
        return 5;
    } else if (['j','J','x','X'].includes(str)) {
        return 8;
    } else if (['q','Q','Z','z'].includes(str)) {
        return 10;
    } else {
        return 0;
    }
}

const userInput = prompt("Enter anything to get its score!");
let finalScore = 0;

for (let index = 0; index < userInput.length; index++) {
    finalScore += CharcterValueFinder(userInput[index]);
}

alert(finalScore);