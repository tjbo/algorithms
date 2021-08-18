// multiple pointers pattern
// both these pointers start at start but could start anywhere depending on what you are doing
// assume input is always sorted
function countUniqueValues(arr) {
  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  // this allows empty arrays to work, or else i + 1 would work
  return arr.slice(0, i + 1).length
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])) // returns 2
console.log(countUniqueValues([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7])) // returns 7
console.log(countUniqueValues([])) // returns 0
console.log(countUniqueValues([-3, -3, -2, -2, -1, 0])) // returns 4
