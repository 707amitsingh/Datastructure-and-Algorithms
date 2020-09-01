// Find product of array elements

const recursionArrayProduct = (arr, index = 0) => {
    if(index === arr.length - 1) return arr[index]
    return arr[index]*recursionArrayProduct(arr, index + 1)
}

console.log(recursionArrayProduct([1,2,3,10]))