const capitalize = str => {
    let isPrevSpace = true
    let resultString = ''
    for(let char of str) {
        let code = char.charCodeAt(0)
        let currentChar = char
        if(code !== 32 && isPrevSpace) {
            currentChar = char.toUpperCase()
            isPrevSpace = false
        }
        if(code === 32) {
            isPrevSpace = true
        }
        resultString += currentChar
    }
    return resultString
}

const result = capitalize('    hi there this      is Amit! adhjfja jhbdvha bdfuvyabc hbdvuchs')
console.log(result)