// https://www.codewars.com/kata/5868b2de442e3fb2bb000119

const getNumbers = numbersString => numbersString.split(' ')

const getWeight = numberString =>
  numberString.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0)

const getDiff = (number1Data, number2Data) =>
  Math.abs(number1Data.weight - number2Data.weight)

const areClosest = (closestData, number1Data, number2Data) => {
  if (closestData.diff < 0) return true
  const diff = Math.abs(number1Data.weight - number2Data.weight)
  if (closestData.diff < diff) return false
  if (closestData.diff > diff) return true
  if (
    closestData.number1.weight + closestData.number2.weight >
    number1Data.weight + number2Data.weight
  ) {
    return true
  }
  if (
    closestData.number1.weight + closestData.number2.weight <
    number1Data.weight + number2Data.weight
  ) {
    return false
  }
  if (
    closestData.number1.index + closestData.number2.index >
    number1Data.index + number2Data.index
  ) {
    return true
  }
  return false
}

const getClosestData = numbersStrings => {
  const weights = numbersStrings.map(getWeight)
  const closestData = { diff: -1 }
  weights.forEach((weight, index) => {
    for (let index2 = index + 1; index2 < weights.length; index2++) {
      const number1Data = {
        index,
        weight,
        number: numbersStrings[index],
      }
      const number2Data = {
        index: index2,
        weight: weights[index2],
        number: numbersStrings[index2],
      }
      if (areClosest(closestData, number1Data, number2Data)) {
        Object.assign(closestData, {
          diff: getDiff(number1Data, number2Data),
          number1: number1Data,
          number2: number2Data,
        })
      }
    }
  })
  return closestData
}

const getResult = diffData => [
  [
    diffData.number1.weight,
    diffData.number1.index,
    parseInt(diffData.number1.number, 10),
  ],
  [
    diffData.number2.weight,
    diffData.number2.index,
    parseInt(diffData.number2.number, 10),
  ],
]

const getSortedResult = diffDataArray =>
  diffDataArray.slice().sort((data1, data2) => {
    if (data1[0] !== data2[0]) return data1[0] - data2[0]
    return data1[1] - data2[1]
  })

const closest = strng => {
  if (strng === '') return []
  const numbersStrings = getNumbers(strng)
  const closestData = getClosestData(numbersStrings)
  const result = getResult(closestData)
  return getSortedResult(result)
}
