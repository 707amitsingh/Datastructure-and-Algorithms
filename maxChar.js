const charChecker = (str) => {
    if(typeof str === 'string') {
        const directory = {}
        const strArr = str.split('')
        let temp = 0
        let maxChar = null
        let result = ''

        strArr.forEach(char => {
            if(directory[char]) {
                directory[char] += 1
            } else {
                directory[char] = 1
            }
        })
        for (let char in directory) {
            if(directory[char] > temp) {
            maxChar = directory[char]
            temp = maxChar
            result = char
            }
        }
        return `${result}: Count: ${maxChar}`
    } else {
        console.log('Please enter a string')
    }
}

const result = charChecker('Amiiiiiiiiiiiiiiiiiiitttttttttt')

console.log(result)