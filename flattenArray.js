var arr = ['a1',  'ab', 'bc', ['abc', 'bca',['abcd']], ['abc', 'bca',['abcd']]]

let finalFlatten = []


const flatten = (arr) => {
    const newArray = arr.map(el => {
        if(Array.isArray(el)) {
            let subArr = [...el]
            flatten(subArr)
        } else {
            finalFlatten.push(el)
        }
    })
    return newArray
}
flatten(arr)

console.log(finalFlatten)