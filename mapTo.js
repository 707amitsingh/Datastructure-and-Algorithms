// implement mapTo in Array.prototype
Array.prototype.mapTo = function() {
    const output = []
    this.forEach(el => {
        output.push(el*2)
    })
    return output
}

const arr = [1,2,3,4,5,6,7,8,9,10].mapTo()

console.log(arr)