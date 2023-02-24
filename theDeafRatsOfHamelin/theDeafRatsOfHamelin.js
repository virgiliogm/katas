const PIED_PIPER = 'P'
const RAT_GOING_LEFT = 'O~'
const RAT_GOING_RIGHT = '~O'

const removeWhitespaces = string => string.replace(/\s/g, '')

const splitStringByChar = (string, char) => string.split(char)

const countOccurrences = (string, key) => {
  let occurrences = 0

  for (let i = 0; i < string.length; i += key.length) {
    if (string.substr(i, key.length) === key) {
      occurrences += 1
    }
  }

  return occurrences
}

const countDeafRats = town => {
  const stringWithoutWhitespaces = removeWhitespaces(town)

  const [leftRatsString, rightRatsString] = splitStringByChar(
    stringWithoutWhitespaces,
    PIED_PIPER,
  )

  const deafRatsOnTheLeft = countOccurrences(leftRatsString, RAT_GOING_LEFT)

  const deafRatsOnTheRight = countOccurrences(rightRatsString, RAT_GOING_RIGHT)

  return deafRatsOnTheLeft + deafRatsOnTheRight
}
