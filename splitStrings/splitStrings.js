const solution = str => {
  if (str === '') return []
  const evenString = str.length % 2 === 0 ? str : `${str}_`
  return evenString.match(/.{2}/g)
}

// For loop

const solution = str => {
  const result = []
  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + (str[i + 1] ?? '_'))
  }
  return result
}

// Functional

const isLastGroupFull = groups => groups[groups.length - 1].length === 2

const addCharToLastGroup = (groups, char) => {
  const result = [...groups]
  result[result.length - 1] += char
  return result
}

const addNewGroup = (groups, char) => {
  const result = [...groups]
  result.push(char)
  return result
}

const isLastChar = (str, index) => index === str.length - 1

const solution = str => {
  if (str === '') return []
  return str.split('').reduce(
    (charsGroups, char, index) => {
      if (!isLastGroupFull(charsGroups)) {
        addCharToLastGroup(charsGroups, char)
      } else {
        addNewGroup(charsGroups, char)
      }
      if (isLastChar(str, index) && !isLastGroupFull(charsGroups)) {
        addCharToLastGroup(charsGroups, '_')
      }
      return charsGroups
    },
    [''],
  )
}
