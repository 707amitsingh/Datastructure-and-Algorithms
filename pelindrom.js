// Better
const isPelindrom1 = (str) => {
    const reversed = str.split('').reverse().join('')
    return reversed === str
}


// Not better - more then required comparisions
const isPelindrom2 = (str) => {
    const strArr = str.split('')
    const center = Math.floor(strArr.length/2) + strArr.length%2 - 1
    const length = strArr.length

    return strArr.every((item, index) => {
        return item === strArr[length - index - 1]
    })
}

console.log(isPelindrom2('aba'))