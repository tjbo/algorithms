// sorts items by moving smallest value to start
const list = [
  1, 2, 6, 99, 97, 76, 33, 44, 22, 11, 3, 4, 8, 111, 333, 444, 222, 666, 999,
  888, 777,
]

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

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
