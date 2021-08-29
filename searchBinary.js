// binary search
// uses 2 pointers to divide and conquer by finding a middle value
// thereby reducing the amount of search space to half on each iteration
// assumes sorted input

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

binarySearch([1, 2, 3, 5, 6, 7, 8, 9, 11, 33, 55, 666, 777, 888, 999], 888)
