const isWhitespace = char => /\s/.test(char)

const formatWaveStepString = (inputString, index) => {
  const afterUpperChar = inputString.substring(0, index)
  const upperChar = inputString[index].toUpperCase()
  const beforeUpperChar = inputString.substring(index + 1)

  return afterUpperChar.concat(upperChar).concat(beforeUpperChar)
}

const wave = inputString => {
  const result = []

  for (let i = 0; i < inputString.length; i++) {
    if (!isWhitespace(inputString[i])) {
      const waveStepString = formatWaveStepString(inputString, i)

      result.push(waveStepString)
    }
  }

  return result
}
