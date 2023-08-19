const firstName=prompt("Your first name")
const lastName=prompt("Your last name")
console.log(`${firstName} ${lastName}`)
let noSpaceFirstName=firstName.trim().split(" ").join("")
let noSpaceLastName=lastName.trim().split(" ").join("")
const lenghtOfFullName=noSpaceFirstName.length + noSpaceLastName.length
console.log(lenghtOfFullName)