// // Find min sub array length, sum of whose elements is equal to a provided value

const smallestSubArray = (arr, num) => {
    let start = 0
    let end = 0
    let sum = arr[0]
    let length = arr.length
    

    while (start <= end) {
        // shrink window if sum is greater than the target
        if (sum >= num) {
            sum -= arr[start]
            start++
        } else if (sum < num && end < arr.length - 1) { // expand window if sum is smaller than the target
            end++
            sum += arr[end]
        }

        // set the value of length
        if(start !== end && sum >= num) {
            length = length > end - start + 1 ? end - start + 1 : length
        }
        if(start === end && sum >= num)  {
            length = 1
        }
        if(start === end) {
            break
        }
    }

    return length
}

console.log(smallestSubArray([2,3,1,2,4,3], 7))