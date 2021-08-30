// radix sort
// radix sort is interesting because it doesn't use a comparator
// instead it puts numbers in a bucket based on their last digit
// then re-assembles the array and repeats the process
// until no digits left

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

sortRadix([123, 3333, 444, 55, 66, 12345, 6789])
