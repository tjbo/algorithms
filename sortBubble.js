// bubble sort
// sorts items by bubbling up the larger items to the top

const list = [1, 2, 6, 99, 97, 76, 33, 44, 22, 11, 3, 4]

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function bubbleSort(arr) {
  let isDirty = {}
  let noSwaps = true
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (!isDirty[i]) {
      break
    }
  }
  console.log(arr)
}

bubbleSort(list)
