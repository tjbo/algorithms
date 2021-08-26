// factors together all numbers in range of n

function factorial(n) {
  if (n <= 1) {
    return n || 1
  }

  return n * factorial(n - 1)
}

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
