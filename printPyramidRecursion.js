const printPyramid = (num, iteration = 1) => {
    const length = 2*num - 1
    const hashNumber = 2*iteration - 1

    const dashNumber = length > hashNumber ? Math.floor((length - hashNumber)/2) : 0

    const step1 = printBrick(dashNumber, 'dash')
    const step2 = printBrick(hashNumber, 'hash')
    const step3 = printBrick(dashNumber, 'dash')

    console.log(step1 + step2 + step3)

    if(length !== hashNumber) {
        printPyramid(num, iteration + 1)
    }
}

const printBrick = (n, type) => {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += type === 'dash' ? '_' : '#'
    }
    return result
}

printPyramid(28)