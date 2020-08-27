const reverseInt = (int) => {
    const isNegative = int < 0
    if(isNegative) {
        int *= -1
    }
    const intStr = String(int)
    const reversed = isNegative ? '-' + intStr.split('').reverse().join('') : intStr.split('').reverse().join('')

    return Number(reversed)
}

console.log(reverseInt(-12345678910))