const input = [0,1,0,3,0, 0,0,12]

const moveZeros = (arr) => {
    let zeroCount = 0
    let len = arr.length

    for(let i = 0; i < len; i++) {
        if(arr[i] === 0) {
            zeroCount++
            for(let j = 0; j < zeroCount; j++) {
                arr[i] = arr[i + zeroCount]
                console.log('>>>>>>>>> arr', arr)
                arr[i + zeroCount] = 0
                i++
            }
        }   
    }

    return arr
}

const zeroMoved = moveZeros(input)

console.log(zeroMoved)