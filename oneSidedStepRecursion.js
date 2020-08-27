const stepPrinter= (len, iteration = 1) => {
    let row = ''
    for(let i = 0; i < len; i++) {
        row += i + 1 <= iteration ? '#' : '_'
    }
    console.log(row)
    if(iteration < len) {
        stepPrinter(len, iteration + 1)
    }
}

stepPrinter(5)
