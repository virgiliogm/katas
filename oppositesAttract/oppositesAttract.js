const isOdd = number => number % 2 !== 0

const oneOfTwoNumbersIsOdd = (x, y) => isOdd(x + y)

const lovefunc = (flower1, flower2) => oneOfTwoNumbersIsOdd(flower1, flower2)

// const lovefunc = oneOfTwoNumbersIsOdd
