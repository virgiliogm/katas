const snail = (rows, result = [], reverse = false) => {
  if (rows.length === 0) {
    return result
  }

  let iterationResult = [...result]

  let pendingRows = []

  for (let i = 0; i < rows.length; i++) {
    const row = [...rows[i]]

    if (i === 0) {
      const rowToAdd = reverse ? row.reverse() : row

      iterationResult = [...iterationResult, ...rowToAdd]

      reverse = !reverse
    } else if (i < rows.length - 1) {
      const numberToAdd = reverse ? row.pop() : row.shift()

      iterationResult = [...iterationResult, numberToAdd]

      // NOTE: row has been mutated by pop or shift
      pendingRows = [row, ...pendingRows]
    } else {
      pendingRows = [row, ...pendingRows]
    }
  }

  return snail(pendingRows, iterationResult, reverse)
}

module.exports = snail
