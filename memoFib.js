// simple memoization
// this example is actually better done as a tabulation in a loop as the memo
// version would have worse space complexity

function fib(n, memo = { 1: 1, 2: 1 }) {
  if (memo[n]) {
    return memo[n]
  }

  const value = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = value

  return value
}

fib(5)
