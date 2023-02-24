// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

/*
  Snail Sort

  Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

  array = [[1,2,3],
           [4,5,6],
           [7,8,9]]
  snail(array) #=> [1,2,3,6,9,8,7,4,5]

  For better understanding, please follow the numbers of the next array consecutively:

  array = [[1,2,3],
           [8,9,4],
           [7,6,5]]
  snail(array) #=> [1,2,3,4,5,6,7,8,9]

  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

  NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

const snail = require('./snail')

describe('Snail', () => {
  it('Retruns an empty array for the empty matrix', () => {
    const input = [[]]

    expect(snail(input)).toStrictEqual([])
  })

  it('Sorts correctly a 1x1 matrix', () => {
    const input = [[1]]

    expect(snail(input)).toStrictEqual([1])
  })

  it('Sorts correctly a 2x2 matrix', () => {
    const input = [
      [1, 2],
      [3, 4],
    ]

    expect(snail(input)).toStrictEqual([1, 2, 4, 3])
  })

  it('Sorts correctly a 3x3 matrix', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect(snail(input)).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
  })

  it('Sorts correctly a 5x5 matrix', () => {
    const input = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ]
    
    expect(snail(input)).toStrictEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19,
      18, 17, 12, 13,
    ])
  })
})
