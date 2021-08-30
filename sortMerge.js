// merge sort
// merge sort breaks apart arrays into length of one than reassembles
// it takes advantage of the fact that when you merge an array
// it is auto sorted

function mergeArrays(arr1, arr2) {
  let newArray = []
  let cursor1 = 0
  let cursor2 = 0
  const totalLength = arr1.length + arr2.length

  for (let i = 0; i < totalLength; i++) {
    if (arr1[cursor1] < arr2[cursor2] || cursor2 === arr2.length) {
      newArray[i] = arr1[cursor1]
      cursor1++
    } else {
      newArray[i] = arr2[cursor2]
      cursor2++
    }
  }
  return newArray
}

function sortMerge(arr) {
  if (arr.length === 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const left = sortMerge(arr.slice(0, mid))
  const right = sortMerge(arr.slice(mid))
  return mergeArrays(left, right)
}

const arr1 = [3, 4, 5, 2, 6, 8, 9, 11, 1]

sortMerge(arr1)
