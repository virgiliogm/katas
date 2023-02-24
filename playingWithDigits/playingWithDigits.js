const getDigits = number =>
  number
    .toString()
    .split('')
    .map(Number)

const sumOfPows = (digits, power) => {
  return digits.reduce(
    (total, digit, index) => total + digit ** (power + index),
    0,
  )
}

const digPow = (number, power) => {
  const digits = getDigits(number)
  const total = sumOfPows(digits, power)
  const division = total / number
  return Number.isInteger(division) ? division : -1
}