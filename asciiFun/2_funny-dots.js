const CORNER = '+'
const HORIZONTAL = '---'
const VERTICAL = '|'
const DOT = 'o'

const border = length => `${CORNER}${HORIZONTAL}`.repeat(length) + CORNER
const sideAndDot = length => `${VERTICAL} ${DOT} `.repeat(length) + VERTICAL
const row = length => `${border(length)}\n${sideAndDot(length)}\n`

const dot = (n, m) => {
  return `${row(n).repeat(m)}${border(n)}`
}
