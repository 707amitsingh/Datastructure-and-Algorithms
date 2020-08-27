// Using Array.prototype.reverse
const reverse0 = (str) => str.split('').reverse().join('')


// Using for loop
const reverse = (str) => {
    const length = str.length
    let reversed = ''
    for (let i = length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed
}

//Using for of loop
const reverse2 = (str) => {
    let reversed = ''
    for (let char of str) {
        reversed  = char + reversed
    }
    return reversed
}

// Using Array.prototype.reduce
let reverse3 = (str) => {
    const srtArr = str.split('')    
    const reversed = srtArr.reduce((acc, item) => arr = item + acc, '')
    return reversed
}

const memoize = (fn) => {
    const directory = {}
    
    return function(...args) {
        if(directory[args]) {
            return directory[args]
        }
        else {
            let result = fn.apply(this, args)
            directory[args] = result
            return result
        }
    }
}
reverse3 = memoize(reverse3)

let counter = 5

while(counter > 0) {
    console.time()
    console.log(reverse3('Amit Singh, Greetings!'))
    console.timeEnd()
    counter--
}
// const result = reverse3('Amit Singh, Greetings!')

// console.log(result)