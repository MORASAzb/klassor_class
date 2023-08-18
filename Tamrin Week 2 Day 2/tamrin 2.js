const randomNumber=prompt("Give a special positive number")
if (randomNumber < 0 || isNaN(randomNumber) || randomNumber=="")
{
    console.log("Not a valid number")
}
else if( randomNumber%2 == 0){
    console.log(randomNumber/2)
}
else{
    console.log((randomNumber-1)/2)
}
