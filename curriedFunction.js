const curried = () => {
    let counter = 0
    return function func(value) {
        if(value) {
            counter += value
            return func
        }
        return counter
    }
}

const sum = curried()

const result = sum(10)(20)(3)(4)()

console.log(result)
