// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// const persistence = (n, times = 0) => {
//   if (n < 10) {
//     return times
//   }
//   const result = n
//     .toString()
//     .split('')
//     .reduce((a, b) => a * b, 1)
//   return persistence(result, times + 1)
// }

const persistence = n => {
  if (n < 10) {
    return 0
  }
  const result = n
    .toString()
    .split('')
    .reduce((a, b) => a * b, 1)
  return 1 + persistence(result)
}
