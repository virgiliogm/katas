const SUFFIX = 'ay'

const moveFirstChar = word => word.slice(1).concat(word.slice(0, 1))

const concatStrings = end => start => start.concat(end)

const concatSuffix = concatStrings(SUFFIX)

const pigIt = inputString => {
  const regexToMatchWords = /[a-z]+/gi

  return inputString.replace(regexToMatchWords, word =>
    concatSuffix(moveFirstChar(word)),
  )
}

// const modifyWords = (string, ...functions) => {
//   const regexToMatchWords = /[a-z]+/gi

//   return string.replace(regexToMatchWords, word => {
//     let modifiedWord = word

//     functions.forEach(fn => {
//       modifiedWord = fn(modifiedWord)
//     })

//     return modifiedWord
//   })
// }

// const pigIt = inputString => {
//   return modifyWords(inputString, moveFirstChar, concatSuffix)
// }
