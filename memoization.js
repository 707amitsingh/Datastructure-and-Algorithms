const memoize = fn => {
    const memory = {}
    if(typeof fn !== 'function') throw new Error('Memoize expect a function as an argument')
    return function(...args) {
        if(memory[args]) {
            return memory[args]
        }

        const result = fn.apply(this, args)
        memory[args] = result
        return result
    }
}

let fibinacci = (num, num1 = 0, num2 = 1, counter = 2) => {
    if(num === 1) return num1
    if(num === 2) return num2
    if(counter === num - 1) return num1 + num2
    return fibinacci(num, num2, num1 + num2, counter + 1)
}

fibinacci = memoize(fibinacci)

console.log(fibinacci(4))