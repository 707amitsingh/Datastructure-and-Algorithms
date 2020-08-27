
const generateSpiral = num => {
    let output = []
    let counter = 1
    let iteration = 1
    for(let i = 0; i < num; i++) {
        output.push([])
    }

    for (let i = 0; i < num; i++) {
        output[0].push(counter++)
    }

    while(counter <= num*num) {
        if(counter < num*num) {
            counter = generateLower(output, iteration, num, counter)
        }
        if(counter < num*num) {
            counter = generateUpper(output, iteration, num, counter)
        }
        console.log(counter)
        iteration++
    }
    console.log(output)
}

const generateLower = (input, iteration, num, counter) => {
    for(let i = iteration; i <= num; i++ ){
        if(i < num - iteration + 1) {
            input[i][num - iteration] = counter
            counter++
        } else {
            for(let j = num - iteration; j >= iteration - 1; j--) {
                input[i - 1][j] = counter - 1
                counter++
            }
            counter--
            break
        }
    }
    return counter
}

const generateUpper = (input, iteration, num, counter) => {
    for(let i = num - 1 - iteration; i > iteration - 1; i-- ){
        if(i > iteration) {
            input[i][iteration - 1] = counter
            counter++
        } else {
            for(let j = iteration - 1; j < num - iteration; j++) {
                input[i][j] = counter
                counter++
            }
            break
        }
    }
    return counter
}
generateSpiral(10)