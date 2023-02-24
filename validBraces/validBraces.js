// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const validBraces = braces => {
  const openingBraces = ['{', '[', '(']
  const openingBracesByClosingBrace = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  let openedBraces = []
  for (const brace of braces) {
    if (openingBraces.includes(brace)) {
      openedBraces.push(brace)
    } else {
      const lastBrace = openedBraces.pop()
      if (lastBrace !== openingBracesByClosingBrace[brace]) {
        return false
      }
    }
  }
  return openedBraces.length === 0
}
