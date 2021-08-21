function linearSearch(arr, num) {
  for (let val in arr) {
    if (arr[val] === num) {
      return parseInt(val, 10)
    }
  }
  return -1
}

console.log(linearSearch([15, 22, 3, 4, 55, 66, 7, 8, 9], 15))
