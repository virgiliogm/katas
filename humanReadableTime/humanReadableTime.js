const SECONDS_PER_HOUR = 3600
const SECONDS_PER_MINUTE = 60

const integerDivision = (dividend, divisor) => ({
  quotient: Math.floor(dividend / divisor),
  remainder: dividend % divisor,
})

const padWithZero = number => number.toString().padStart(2, '0')

const humanReadable = totalSeconds => {
  const { quotient: hours, remainder } = integerDivision(
    totalSeconds,
    SECONDS_PER_HOUR,
  )
  const { quotient: minutes, remainder: seconds } = integerDivision(
    remainder,
    SECONDS_PER_MINUTE,
  )
  return [hours, minutes, seconds].map(padWithZero).join(':')
}
