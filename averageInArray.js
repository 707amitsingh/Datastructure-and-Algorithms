// This function will find out if there is at least a pair of elements whose average matches the input

// Assumption: Array is sorted

// O(log(n))

const averagePair = (arr, avg) => {
    let middle = Math.floor(arr.length / 2)
    let start = 0
    let last = arr.length - 1

    while(middle > start && middle < last ) {
        if((arr[middle] + arr[middle + 1]) / 2 < avg) {
            start = middle
            middle = Math.floor((middle + last) / 2)
        } else if ((arr[middle] + arr[middle + 1]) / 2 > avg) {
            last = middle
            middle = Math.floor((start + middle) / 2)
        } else {
            return [arr[middle], arr[middle + 1]]
        }
    }
    return 'No pair found'
}

console.log(averagePair([1,3,2, 5,7,8,9,10,1,3,2, 5,7,8,9,10,1,3,2, 5,7,8,9,10,1,3,2, 5,7,8,9,10,1,3,2, 5,7,8,9,10], 2.5))