const factorial = (num) => {
    if(num === 2) return 2
    return num*factorial(num - 1)
}

const result = factorial(500)
console.log('The factorial is: ', result)