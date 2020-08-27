let counter = 0

const expensiveFunction = () => {
    console.log(`Counter: ${counter++}`)
}

const throttle = (fn, limit) => {
    let canStart = true
    return () => {
        if(canStart) {
            fn()
            canStart = false
            setTimeout(() => {
                canStart = true
            }, limit)
        } 
    }
}

const lessExpensiveFunction = throttle(expensiveFunction, 500)