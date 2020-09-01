// This function finds the max sub array of a specified length, so that the sum of its terms is maximum

const maxSubArraySum = (arr, length) => {
    if(arr.length < length || arr.length === 0) return null
    let maxSum = 0
    let prevSum = 0
    for(let i = 0; i < length; i++) {
        maxSum += arr[i]
    }
    prevSum = maxSum
    console.log(maxSum)

    for(let i = length; i < arr.length; i++) {
        let newSum = prevSum - arr[i - length] + arr[i]
        if(newSum > maxSum) {
            maxSum = newSum
        }
        prevSum = newSum
        console.log(maxSum)
    }
    return maxSum
}

console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2))