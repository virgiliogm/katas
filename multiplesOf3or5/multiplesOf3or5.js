const getNumbersBelowTarget = number =>
  Array.from({ length: number - 1 }, (_, index) => index + 1)

const getFilteredNumbers = numbers =>
  numbers.filter(number => number % 3 === 0 || number % 5 === 0)

const getNumbersSum = numbers =>
  numbers.reduce((acc, number) => acc + number, 0)

const solution = number => {
  const numbersArray = getNumbersBelowTarget(number)
  const filteredNumbers = getFilteredNumbers(numbersArray)
  return getNumbersSum(filteredNumbers)
}
