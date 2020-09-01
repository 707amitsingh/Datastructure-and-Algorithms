const anagramNumber = (num1, num2) => {
    const str1 = num1 + ''
    const str2 = num2 + ''

    if(num1.length !== num2.length) return false

    const lookUp1 = {}
    const lookup2 = {}

    mapOverArray(str1, lookUp1)
    mapOverArray(str2, lookup2)

    if(Object.keys(lookUp1).length !== Object.keys(lookup2).length) return false

    for (let key in lookUp1) {
        if(!lookup2[key]){
            return false
        } else if(lookUp1[key] !== lookup2[key]) {
            return false
        }
    }
    return true
}

const mapOverArray = (arr, obj) => {
    const length = arr.length
    for(let i = 0; i < length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }
}

console.log(anagramNumber(213, 321456))