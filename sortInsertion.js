// insertion sort
// builds up sort by gradually creating a sorted half
// good for use if you were gradually getting numbers over a network and
// or other async situations where you need to maintain a sorted half
const swap = require('./swap')

const list = [
  5, 2, 6, 3, 97, 76, 33, 44, 22, 11, 3, 4, 8, 111, 333, 444, 222, 666, 999,
  888, 777,
]

function sortInsertion(arr) {
  let currentIndex = null
  for (let i = 1; i < arr.length; i++) {
    currentIndex = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[currentIndex]) {
        swap(arr, currentIndex, j)
        currentIndex = j
      }
    }
  }
  return arr
}

sortInsertion(list)
