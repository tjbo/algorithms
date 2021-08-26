// selection sort
// sorts items by gradually moving smallest value to start of array
const swap = require('./swap')

const list = [
  1, 2, 6, 99, 97, 76, 33, 44, 22, 11, 3, 4, 8, 111, 333, 444, 222, 666, 999,
  888, 777,
]

function sortSelection(arr) {
  let minIndex = 0
  for (let j = 0; j < arr.length; j++) {
    minIndex = j
    for (let i = j; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }
    swap(arr, minIndex, j)
  }
}

console.log(sortSelection(list))
