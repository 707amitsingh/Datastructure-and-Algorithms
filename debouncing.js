let counter = 0
const getData = () => {
    console.log(`Counter: ${counter}`)
    counter++
}

const debounce = (fn, delay) => {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

const magicFunction = debounce(getData, 500)