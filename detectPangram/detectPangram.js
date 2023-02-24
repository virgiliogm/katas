const ALPHABET_LENGTH = 26

const getLetters = string => string.match(/[a-z]/g) ?? []

const getUniqueChars = chars => Array.from(new Set(chars))

const isPangram = string => {
  const lowerCaseString = string.toLowerCase()

  const lowerCaseLetters = getLetters(lowerCaseString)

  const uniqueLowerCaseLetters = getUniqueChars(lowerCaseLetters)

  return uniqueLowerCaseLetters.length === ALPHABET_LENGTH
}
