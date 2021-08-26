// assumes positive numbers

function power(num, p) {
  if (p === 0) {
    return 1
  }

  if (p === 1) {
    return num
  }
  --p
  return num * power(num, p)
}

power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16
