// multiple pointers pattern
// assume input is always sorted
function countUniqueValues(arr) {
  let leftPointerIndex = 0
  let rightPointerIndex = 1
  let uniqueValues = 0

  while (rightPointerIndex < arr.length) {
    if (arr[leftPointerIndex] !== arr[rightPointerIndex]) {
      uniqueValues++
      leftPointerIndex = rightPointerIndex
      rightPointerIndex++
    } else {
      rightPointerIndex++
    }
  }

  return uniqueValues
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])) // returns 2
console.log(countUniqueValues([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7])) // returns 7
console.log(countUniqueValues([])) // returns 0
console.log(countUniqueValues([-3, -3, -2, -2, -1, 0])) // returns 4
