const isOdd = number => number % 2 !== 0

const sortByAscendingNumbers = numbers => numbers.slice().sort((a, b) => a - b)

const replaceOddNumbers = (numbers, replacements) => {
  const replacementsCopy = replacements.slice()

  return numbers.map(number =>
    isOdd(number) ? replacementsCopy.shift() : number,
  )
}

const sortTheOdd = numbers => {
  const oddNumbers = numbers.filter(isOdd)

  const sortedOddNumbers = sortByAscendingNumbers(oddNumbers)

  return replaceOddNumbers(numbers, sortedOddNumbers)
}

const sortArray = sortTheOdd
