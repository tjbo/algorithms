// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  arr[0] = arr[0] * arr[arr.length - 1]
  arr.pop()

  return productOfArray(arr)
}

// console.log(productOfArray([1, 2, 3])) // 60
