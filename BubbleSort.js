const arr = [9,7,3,1,2,6,7,8,7]

const bubbleSort = (sorted) => {

    let temp1, temp2
    for(let i = sorted.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            temp1 = sorted[j]
            temp2 = sorted[j + 1]
            if(temp1 > temp2){
                sorted[j] = temp2
                sorted[j + 1] = temp1
            }
        }
    }
    return sorted
}

console.log(bubbleSort(arr))