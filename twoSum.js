const arr = [2,3,8,8,6,10,15,9,14,13,16,21,23,25,7]
const target = 9

const twoSum2 = (arr, target) => {
    const record = {}
    const length = arr.length
    for(let i = 0; i < length; i++) {
        if(arr[i] < target) {
            let part = target - arr[i]
            if(record[part] === 0 || record[part]) {
                return [record[part], i]
            } else {
                record[arr[i]] = i
            }
            console.log(record)
        }
    }
}

const twoSum = (arr, target) => {
    const indexes = []
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                indexes.push(i, j)
                break
            }
        }
    }
    return indexes
}

// (function() {
    console.time('twoSum')
    const result = twoSum(arr, target)
    console.timeEnd('twoSum')
    console.log('>>>>>>>>>', result)
// })()
