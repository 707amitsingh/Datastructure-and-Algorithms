const stepRow = (len, iteration) => {
    let row = ''
    for(let i = 0; i < len; i++) {
        row += i + 1 <= iteration? '#' : '-'
    }
    console.log(row)
}

const stepPrinter = (num) => {
    for(let i = 0; i < num; i++) {
        stepRow(num, i + 1)
    }
}

stepPrinter(15)