const extractDigits = number =>
  number
    .toString()
    .split('')
    .map(digit => parseInt(digit, 10))

const subtractionByRegrouping = (minuend, subtrahend) => {
  const minuendDigits = extractDigits(minuend)
  const subtrahendDigits = extractDigits(subtrahend)
  const result = []
  for (let i = minuendDigits.length - 1; i >= 0; i--) {
    if (minuendDigits[i] < subtrahendDigits[i]) {
      minuendDigits[i] += 10
      minuendDigits[i - 1] -= 1
    }
    result.push(minuendDigits[i])
  }
  return result
}
