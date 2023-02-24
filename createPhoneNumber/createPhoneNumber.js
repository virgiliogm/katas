// const createPhoneNumber = numbers => {
//   const numbersString = numbers.join('')
//   const part1 = numbersString.slice(0, 3)
//   const part2 = numbersString.slice(3, 6)
//   const part3 = numbersString.slice(6)
//   return `(${part1}) ${part2}-${part3}`
// }

// const stringPart = (str, from, to) => str.slice(from, to)
// const createPhoneNumber = numbers => {
//   const numbersString = numbers.join('')
//   const part1 = stringPart(numbersString, 0, 3)
//   const part2 = stringPart(numbersString, 3, 6)
//   const part3 = stringPart(numbersString, 6)
//   return `(${part1}) ${part2}-${part3}`
// }

// const createPhoneNumber = numbers => {
//   const result = [...numbers]
//   result.splice(0, 0, '(')
//   result.splice(4, 0, ') ')
//   result.splice(8, 0, '-')
//   return result.join('')
// }

const createPhoneNumber = numbers => {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
