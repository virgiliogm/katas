// const multiplicationTable = size => {
//   const numbers = Array.from({ length: size }, (value, index) => index + 1)

//   const result = []

//   for (let i = 0; i < numbers.length; i++) {
//     const row = []

//     for (let j = 0; j < numbers.length; j++) {
//       row.push(numbers[i] * numbers[j])
//     }

//     result.push(row)
//   }

//   return result
// }

// const multiplicationTable = size => {
//   const baseNumbers = Array.from({ length: size }, (value, index) => index + 1)

//   const result = []

//   for (let i = 0; i < baseNumbers.length; i++) {
//     const row = Array.from(
//       { length: size },
//       (value, index) => (index + 1) * baseNumbers[i],
//     )

//     result.push(row)
//   }

//   return result
// }

// const multiplicationTable = size => {
//   const baseNumbers = Array.from({ length: size }, (value, index) => index + 1)

//   const result = []

//   for (let i = 0; i < baseNumbers.length; i++) {
//     const row = baseNumbers.map(number => number * baseNumbers[i])

//     result.push(row)
//   }

//   return result
// }

const multiplicationTable = size => {
  const baseNumbers = Array.from({ length: size }, (value, index) => index + 1)

  const result = []

  baseNumbers.forEach(multiplicand => {
    const row = baseNumbers.map(multiplier => multiplicand * multiplier)

    result.push(row)
  })

  return result
}
