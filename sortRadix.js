// radix sort doesn't compare numbers but instead groups them
// by their last number, than repeats this process for all digits
// in a number

function reverseString(str) {
  const splitString = str.split('')
  const reverseArray = splitString.reverse()
  const joinArray = reverseArray.join('')
  return joinArray
}

function getDigit(num, i) {
  const str = reverseString(num.toString())
  return parseInt(str.charAt(i))
}

function digitCount(num) {
  return num.toString().length
}

function mostDigits(numbers) {
  let max = 0
  for (let val in numbers) {
    max = Math.max(digitCount(numbers[val]), max)
  }
  return max
}

function sortRadix(arr) {
  const max = mostDigits(arr)

  let sorted = []

  for (let i = 0; i < max; i++) {
    sorted = []
    for (let k = 0; k < arr.length; k++) {
      const digit = getDigit(arr[k], i) || 0
      if (!sorted[digit]) {
        sorted[digit] = []
      }
      sorted[digit].push(arr[k])
    }
    arr = sorted.flat()
  }

  return arr
}

console.log(sortRadix([123, 3333, 444, 55, 66, 12345, 6789]))
