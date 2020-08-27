let input = [-2,1,-3,4,-1,2,1,-5,4]

const maxSubArray = (arr) => {
    const directory = {}

    const len = arr.length
    let currentArray = []
    let tempArray = []
    let currentSum = 0
    let prevSum = 0

    for(let i = 0; i < len; i++) {
        currentArray.push(arr[i])
        prevSum = currentSum
        currentSum += arr[i]

        if(currentSum < prevSum) {

        } else {

        }
    }
    return currentSum
}