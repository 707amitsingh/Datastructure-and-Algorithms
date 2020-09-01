// Add all the numbers from 0 to the number provided

const addNumbers = (num) => {
    if(num === 1) return 1
    return num + addNumbers(num - 1)
}

console.log(addNumbers(6))