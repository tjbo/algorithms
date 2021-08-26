// returns nth number of fibonacci sequence

function fib(num, prevNums = [1, 1]) {
  if (num === 1) {
    return prevNums[prevNums.length - 2]
  }

  let l = prevNums.length

  prevNums.push(prevNums[l - 1] + prevNums[l - 2])

  --num

  return fib(num, prevNums)
}

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
