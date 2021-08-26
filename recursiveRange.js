// recursive range
// adds together all numbers in a number

function recursiveRange(num) {
  if (num <= 1) {
    return 1
  }

  return num + recursiveRange(--num)
}

recursiveRange(6) // 21
recursiveRange(10) // 55
