const RGB_MIN_VALUE = 0
const RGB_MAX_VALUE = 255

const fitInRgbRange = number => {
  if (number < RGB_MIN_VALUE) {
    return RGB_MIN_VALUE
  }

  if (number > RGB_MAX_VALUE) {
    return RGB_MAX_VALUE
  }

  return number
}

const decimalToHex = number => number.toString(16)

const toUpperCase = string => string.toUpperCase()

const padWithInitialZero = hexNumber => hexNumber.padStart(2, '0')

const rgb = (r, g, b) =>
  [r, g, b]
    .map(fitInRgbRange)
    .map(decimalToHex)
    .map(toUpperCase)
    .map(padWithInitialZero)
    .join('')
