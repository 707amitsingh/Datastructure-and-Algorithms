const longestSubString = (str) => {
    const length = str.length
    let maxLength = 0
    let directory = {}

    let currentLength = 0
    let currentDirectory = {}

    for(let i = 0; i < length; i++) {
        if(!currentDirectory[str[i]]) {
            currentDirectory[str[i]] = i
            currentLength ++
        } else {
            i = currentDirectory[str[i]] + 1
            currentDirectory = {}
            currentLength = 0
            currentDirectory[str[i]] = i
            currentLength = 1
        }
        if(currentLength >= maxLength) {
            directory = currentDirectory
            maxLength = currentLength
        }
    }
    return [directory, maxLength]
}

console.log(longestSubString('thisishowwedoit'))