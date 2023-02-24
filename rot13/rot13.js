// const upperLetters = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
// ]

// const lowerLetters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ]

// const getRot13Char = char => {
//   let letterIndex = upperLetters.indexOf(char)
//   if (letterIndex > -1) {
//     let newIndex = letterIndex + 13
//     if (newIndex > upperLetters.length) {
//       newIndex -= upperLetters.length
//     }
//     return upperLetters[newIndex]
//   }

//   letterIndex = lowerLetters.indexOf(char)
//   if (letterIndex > -1) {
//     let newIndex = letterIndex + 13
//     if (newIndex > lowerLetters.length) {
//       newIndex -= lowerLetters.length
//     }
//     return lowerLetters[newIndex]
//   }

//   return char
// }

const INITIAL_UPPER_LETTER = 65

const INITIAL_LOWER_LETTER = 97

const LETTERS_COUNT = 26

const isInRange = (index, rangeStart, rangeLength) =>
  index >= rangeStart && index < rangeStart + rangeLength

const isValidLetter = charCode => {
  if (
    isInRange(charCode, INITIAL_UPPER_LETTER, LETTERS_COUNT) ||
    isInRange(charCode, INITIAL_LOWER_LETTER, LETTERS_COUNT)
  ) {
    return true
  }

  return false
}

const getRot13NewCharCode = charCode => {
  let newCharCode = charCode + 13

  const isUpperLetter = charCode < INITIAL_LOWER_LETTER

  if (
    (isUpperLetter &&
      !isInRange(newCharCode, INITIAL_UPPER_LETTER, LETTERS_COUNT)) ||
    (!isUpperLetter &&
      !isInRange(newCharCode, INITIAL_LOWER_LETTER, LETTERS_COUNT))
  ) {
    newCharCode -= LETTERS_COUNT
  }

  return newCharCode
}

const getRot13Char = char => {
  const charCode = char.charCodeAt(0)

  if (isValidLetter(charCode)) {
    const newCharCode = getRot13NewCharCode(charCode)
    return String.fromCharCode(newCharCode)
  }

  return char
}

const rot13 = message => message.split('').map(getRot13Char).join('')
