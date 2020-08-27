const arr = [2,3,2,4,5,6,7,8,9,2]

const firstRepeatFinder = (arr) => {
    const dataStorage = {}
    for(let i = 0; i < arr.length; i++){
        let field = arr[i].toString()
        if(dataStorage[field]) {
            return arr[i]
        }
        dataStorage[field] = 'first'
        console.log(dataStorage)
    }
}

const repeatedElement = firstRepeatFinder(arr)
console.log(repeatedElement)