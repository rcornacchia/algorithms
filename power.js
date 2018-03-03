// given a number and an exponent, determine the result
function power(n, x) {
  if (x == 0) return 1
  const result = power(n, Math.floor(x/2))
  return (x % 2 == 0)
    ? (result ** 2)
    : n * (result ** 2)
}

const result = power(3, 3)
console.log(result)