// accepts a sorted array and a value
// uses  2 pointers

function binarySearch(arr, val, leftCursorIndex, rightCursorIndex) {
  rightCursorIndex = rightCursorIndex || arr.length
  leftCursorIndex = leftCursorIndex || 0
  let middleIndex = Math.round((rightCursorIndex + leftCursorIndex) / 2)

  if (arr[middleIndex] === val) {
    return middleIndex
  } else if (val > arr[middleIndex]) {
    return binarySearch(arr, val, middleIndex, rightCursorIndex)
  } else if (val < arr[middleIndex]) {
    return binarySearch(arr, val, leftCursorIndex, middleIndex)
  }

  return -1
}

console.log(
  binarySearch([1, 2, 3, 5, 6, 7, 8, 9, 11, 33, 55, 666, 777, 888, 999], 888),
)
