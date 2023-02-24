const extractDigits = number => number.toString().split('').map(Number)

const sumPairsOfElementAndRest = (numbers, index) => {
  const result = []

  for (let i = index + 1; i < numbers.length; i++) {
    result.push(numbers[index] + numbers[i])
  }

  return result
}

const sumEachPairReducer = (result, _, index, array) => {
  const sumCurrentWithFollowingDigits = sumPairsOfElementAndRest(array, index)

  return [...result, ...sumCurrentWithFollowingDigits]
}

const digits = number => {
  const digits = extractDigits(number)

  return digits.reduce(sumEachPairReducer, [])
}

// const digits = number => {
//   const numberDigits = extractDigits(number)

//   const result = []

//   for (let i = 0; i < numberDigits.length - 1; i++) {
//     for (let j = i + 1; j < numberDigits.length; j++) {
//       result.push(numberDigits[i] + numberDigits[j])
//     }
//   }

//   return result
// }
