const anagramChecker = (str1, str2) => {
    const string1 = str1.replace(/[^\w]/g, '').toLowerCase()
    const string2 = str2.replace(/[^\w]/g, '').toLowerCase()
    const length1 = string1.length
    const length2 = string2.length
    let result = true

    if(length1 !== length2) {
        return false
    }

    const charMap1 = {}
    const charMap2 = {}


    for(let char of string1) {
        if(charMap1[char]) {
            charMap1[char] += 1
        } else {
            charMap1[char] = 1
        }
    }

    for(let char of string2) {
        if(charMap2[char]) {
            charMap2[char] += 1
        } else {
            charMap2[char] = 1
        }
    }
    
    for( let key in charMap1 ) {
        if(charMap2[key] && charMap1[key] === charMap2[key]){
           result = true
        }   else {
           return false
        }
    }

    return result
}

const result = anagramChecker('Ammmmit!!!!!', '!!!Mmmmi!!at!!')

console.log(result)