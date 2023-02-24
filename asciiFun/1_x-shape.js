const WHITE = '■'
const BLACK = '□'

const setFromStartAndEnd = (target, item, length, index) => {
  target[index] = item
  target[length - 1 - index] = item
}

const createMatrix = n => {
  const matrix = []
  const middleIndex = Math.trunc(n / 2)
  for (let i = 0; i <= middleIndex; i++) {
    const row = Array(n).fill(BLACK)
    setFromStartAndEnd(row, WHITE, n, i)
    setFromStartAndEnd(matrix, row, n, i)
  }
  return matrix
}

const rowToString = row => row.join('')
const matrixToString = matrix => matrix.map(rowToString).join('\n')

const x = n => {
  const matrix = createMatrix(n)
  return matrixToString(matrix)
}
