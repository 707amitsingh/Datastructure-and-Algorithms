// const fibinacci = (num, num1 = 0, num2 = 1, counter = 2) => {
//     if(num === 1) return num1
//     if(num === 2) return num2
//     if(counter === num - 1) return num1 + num2
//     return fibinacci(num, num2, num1+num2, counter + 1)
// }

// console.log(fibinacci(22))


const fibinacci = (num) => {
    if(num <= 2) return 1
    return fibinacci(num - 1) + fibinacci(num - 2)
}

console.log(fibinacci(5))