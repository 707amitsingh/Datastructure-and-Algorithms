// const reverseString = (str) => {
//     if(str.length === 0) return ''
//     return str[str.length - 1] + reverseString(str.slice(0,-1))
// }

const reverseString = (str) => {
    if (str === "") {
        return "";
      } else {
        return reverseString(str.substr(1)) + str.charAt(0);
      }
}

console.time()
const result = reverseString('Amit singh choudhary sdbckauvsdkcvakdschj')
console.timeEnd()

console.log(result)