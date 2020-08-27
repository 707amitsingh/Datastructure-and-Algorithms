const fibinacci = (num) => {
    let num1 = 0, num2 = 1, temp
    if(num === 1) return num1
    if(num === 2) return num2

    for(i = 2; i < num; i++) {
        temp = num1 + num2
        num1 = num2
        num2 = temp
    }
    return num2
}

console.log(fibinacci(8))