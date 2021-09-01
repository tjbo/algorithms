// multiplies all numbers in an array

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  arr[0] = arr[0] * arr[arr.length - 1]
  arr.pop()

  return productOfArray(arr)
}

productOfArray([10, 2, 3]) // 60
productOfArray([1, 2, 3]) // 6
