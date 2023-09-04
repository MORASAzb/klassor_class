// function userInfoArranger(userInfo) {
//     const manipulatedUserIfo = {
//         ...userInfo,
//         sum : sumArrayIndices(userInfo.faveNum),
//         "fullName":userInfo["name"]+" "+userInfo["lastName"]
//     }
//     return manipulatedUserIfo
// }
// function sumArrayIndices(arr) {
//     let totalSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       totalSum += 1 * arr[i];
//     }
//     return totalSum;
//   }
// const userInfo={
//     "name":'',
//     "age":'',
//     'lastName':'',
//     "faveNum":[]

// }


// userInfo['name']=prompt("Your name")
// userInfo['age']=prompt("Your age")
// userInfo['lastName']=prompt("Your lastName")
// while (true) {
//     const faveNum=Number(prompt("Your faveNum (put -1 if none)"))
//     if (faveNum == -1){
//         break
//     }
//     userInfo['faveNum'].push(faveNum)
// }

// console.log(userInfoArranger(userInfo))


// const arr1 = [10,20,30]


// const answerArr = (arr1) => {
//     const result = arr1.map(
//         function(x,i){
//             return x *(i+1)
//         }
//     )
//     return result
// }
// console.log(arr1.map(
//     function(x,i){
//         return x *(i+1)
//     }
// ))

// arrayNumber=[10,20,15]
// function zoogKeeper(arrayNumber) {
//     const zoogNumber = arrayNumber.filter(
//         (value) =>{
//             return value%2 == 0  
//         })
//     return zoogNumber
// }
// console.log(zoogKeeper(arrayNumber))
// function showKeyValue(object) {
//     for (const key in object) {
//         console.log(key + object[key])
//     }
// }
// showKeyValue({key1:"val1",key2:"val2"})
// const userNumbers=[]
// while (true) {
//     const faveNum=Number(prompt("Your faveNum (put -1 if none)"))
//     if (faveNum == -1){
//         break
//     }
//     userNumbers.push(faveNum)
// }
// const userCheckNumber=Number(prompt("give number to check is existance"))
// alert(userCheckNumber == userNumbers.find(userCheckNumber => userNumbers.includes(userCheckNumber)))



// const student = {
//     riazu :10,
//     olom:17,
//     ohysic:11,
//     akhlagh:0,
// }

// function name(student) {
//     const student_arr = 
//     Object.entries(student)
//     .map(
//             (value) =>  value
//                             .map(
//                                     (value,i ) => i==0 ? value : value*2
//                                 )
//         )
//     .filter(
//         item => item[1] != 0
//         )
//     const student_obj = Object.fromEntries(student_arr)
//     return student_obj
// }

// console.log(name(student))
// const keysOfClass=Object.keys(name(student))
// console.log(keysOfClass)

// const {riazu} = name(student)
// console.log(riazu)


const userEmail = prompt("Email to delete users realted")
const input ='{"employees":[{"name":"Sonoo","email":"sonoojaiswal1987@gmail.com"},{"name":"Rahul","email":"rahul32@gmail.com"},{"name":"John","email":"john32bob@gmail.com"}]}'
function name(input , inputemail) {
    input=JSON.parse(input)
    const employees = input['employees'].filter(
                (value ) => {
                    return value['email'] != inputemail
                }
            )
    input['employees'] = employees
    return JSON.stringify(input)
}
console.log(name(input,userEmail))