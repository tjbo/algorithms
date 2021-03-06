// bubble sort
// sorts items by bubbling up the larger items to the top
const swap = require('./swap')

const list = [1, 2, 6, 99, 97, 76, 33, 44, 22, 11, 3, 4]

function bubbleSort(arr) {
  let isDirty = {}
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    if (!isDirty[i]) {
      break
    }
  }
  return arr
}

bubbleSort(list)
