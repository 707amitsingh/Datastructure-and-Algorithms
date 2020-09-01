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

const reverseString2 = (str, index=0) => {
  if(str.length === 1) return str
  return reverseString(str.substr(1), index++) + str[index]
}

console.time()
const result = reverseString2('Amit singh choudhary sdbckauvsdkcvakdschj')
console.timeEnd()



console.log(result)