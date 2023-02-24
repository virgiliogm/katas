const getDigitsSum = numberOrString => {
  const numbersArray = Number(numberOrString).toString().match(/[0-9]/g)
  return numbersArray
    ? numbersArray.reduce((acc, digit) => acc + Number(digit), 0)
    : 0
}

const weightsSorter = (a, b) => {
  const aDigitsSum = getDigitsSum(a)
  const bDigitsSum = getDigitsSum(b)

  if (aDigitsSum === bDigitsSum) {
    return a < b ? -1 : 1
  }

  return aDigitsSum < bDigitsSum ? -1 : 1
}

const extractNumbers = numbersString =>
  numbersString
    .trim()
    .replace(/\s{2,}/g, ' ')
    .split(' ')

const orderWeight = weightsString => {
  const weightsList = extractNumbers(weightsString)
  return weightsList.sort(weightsSorter).join(' ')
}
