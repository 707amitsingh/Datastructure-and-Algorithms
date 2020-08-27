const arrayChunker = (arr, size) => {
    const newArray = []
    let tempArray = []
    let length = arr.length
    while (length > 0) {
        for (let i = 0; i < size; i++) {
            if (length > 0) {
                const popped = arr[arr.length - length]
                tempArray.push(popped)
                length--
            }
        }
        newArray.push(tempArray)
        tempArray = []
    }
    return newArray
}

const chunked = arrayChunker([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)

console.log(chunked)