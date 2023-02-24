const getSubject = (names, maxNamesShown = 3, namesOnOverflow = 2) => {
  if (names.length === 0) {
    return 'no one'
  }

  if (names.length === 1) {
    return names[0]
  }

  if (names.length === 2) {
    return names.join(' and ')
  }

  if (names.length <= maxNamesShown) {
    return names
      .slice(0, maxNamesShown - 1)
      .join(', ')
      .concat(' and ')
      .concat(names[maxNamesShown - 1])
  }

  const numberOfHiddenNames = names.length - namesOnOverflow

  return names
    .slice(0, namesOnOverflow)
    .join(', ')
    .concat(' and ')
    .concat(numberOfHiddenNames)
    .concat(' others')
}

const getPredicate = names => (names.length > 1 ? 'like this' : 'likes this')

const likes = names => {
  const subject = getSubject(names)
  const predicate = getPredicate(names)

  return `${subject} ${predicate}`
}
