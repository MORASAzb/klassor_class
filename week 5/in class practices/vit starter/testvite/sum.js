export default function sum(array) {
    let sum=0
    for (let index = 0; index < array.length; index++) {
        sum=Number(array[index]) + sum
        
    }
    return sum
}

