// Better
const isPelindrom1 = (str) => {
    const reversed = str.split('').reverse().join('')
    return reversed === str
}

const isPalindrom3 = (str) => {
    let length = str.length
    let result = false
    for(let i = 0; i < length; i++) {
        if(i >= length - i) break
        if(str.charAt(i) === str.charAt(length - i - 1)) {
            result = true
        } else {
            return false
        }
    }
    return result
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

console.log(isPalindrom3('amitima'))