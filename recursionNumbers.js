const printNums = (num, counter = 1) => {
    console.log(counter)
    if(counter === num) return
    counter++
    return printNums(num, counter)
}

const result = printNums(10)
console.log(result)