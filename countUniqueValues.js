// multiple pointers pattern
// both these pointers start at start but could start anywhere
// for this example assume input is always sorted

function countUniqueValues(arr) {
  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  // this allows empty arrays to work, or else i + 1 would fail
  console.log(arr.slice(0, i + 1).length)
  return arr.slice(0, i + 1).length
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2]) // returns 2
countUniqueValues([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7]) // returns 7
countUniqueValues([]) // returns 0
countUniqueValues([-3, -3, -2, -2, -1, 0]) // returns 4
