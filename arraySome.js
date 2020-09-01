// Array.protopty.some implementation

const someIterative = (arr, cb) => {
    let someResult = false
    arr.forEach(el => {
        someResult = cb(el)
        if(someResult) {
            return someResult
        }
    })
    return someResult
}

const someRecursion = (arr, cb, counter = 0) => {
    if(cb(arr[counter])) return true
    if(counter === arr.length - 1) return false
    counter++
    return someRecursion(arr,cb,counter)
}

const cb = val => val > 10

console.log(someRecursion([1,2,3,4,5,6,7,8,9,10, 11], cb))