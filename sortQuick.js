// quick sort
// quick sort uses a pivot index
// then moves values to left or right of pivot
// leaving them unsorted, but the index pivot is now sorted
// it then repeats picking a new pivot index
// until everything is sorted
const swap = require('./swap')

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[start]
  let pivotIndex = start

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++
      swap(arr, i, pivotIndex)
    }
  }
  swap(arr, start, pivotIndex)
  return pivotIndex
}

function sortQuick(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let resultIndex = pivot(arr, left, right)
    sortQuick(arr, left, resultIndex - 1)
    sortQuick(arr, resultIndex + 1, right)
  }
  return arr
}

const arr = [4, 8, 7, 9, 1, 10, 2, 5, 3, 11]
sortQuick(arr)
