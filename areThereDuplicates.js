// This fuctions finds if there are any duplicates in the arguments

const areThereDuplicates = (...args) => {
    const lookUp = {}
    const length = args.length
    for(let i = 0; i < length; i ++) {
        if(lookUp[args[i]]) {
            return false
        } else {
            lookUp[args[i]] = 1
        }
    }
    return true
}

console.log(areThereDuplicates(1,2,3,4,5,67,8,9,0,01,11))