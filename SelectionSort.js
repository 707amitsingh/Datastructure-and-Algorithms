const arr = [9,7,3,1,2,6,7,8,7]

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let smallest = arr[i]
        let index = i
        for(let j = i; j < arr.length; j++){
            if(arr[j] < smallest){
                smallest = arr[j]
                index = j
            }
        }
        if(smallest !== arr[i]){
            let temp = arr[i]
            arr[i] = smallest
            arr[index] = temp
        }
    }
    return arr
}

console.log(selectionSort(arr))