const arr1 = [0, 2, 31, 45, 56, 78, 91]
const arr2 = [1, 3, 56, 78, 90, 91, 92, 93]

// Much better and efficient approch
const mergeSortedArray = (arr1, arr2) => {
  console.time()
  let len1 = arr1.length
  let len2 = arr2.length

  let merged = []
  let index1 = 0
  let index2 = 0
  while(len1 !== 0 && len2 !== 0) {
    if(arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1])
      len1--
      index1++
    } else {
      merged.push(arr2[index2])
      len2--
      index2++
    }
  }

  if(len2 > 0) {
    merged = [...merged, ...arr2.slice(index2)]
  } else {
    merged = [...merged, ...arr1.slice(index1)]
  }
  console.timeEnd()
  return merged
}


// Uses a lot of memory
// don't use very inefficient - for long arrays -> JavaScript heap out of memory error
const mergeSortedArray2 = (arr1, arr2) => {
  console.time()
  const merged = []
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift())
    } else {
      merged.push(arr2.shift())
    }
  }
  if(arr1.length > 0) merged.concat(arr1)
  if(arr2.length > 0) merged.concat(arr2)
  console.timeEnd()
  return merged
}

const r = mergeSortedArray2(arr1, arr2)
console.log(r)