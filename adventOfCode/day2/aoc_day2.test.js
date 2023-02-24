const { part1, part2, parseInput, input } = require('./aoc_day2')

const sampleInput = `A Y
B X
C Z`

describe('Advent of Code - Day 2', () => {
  it('returns your total score if everything goes exactly according to your strategy guide', () => {
    console.log('Output with provided input - part 1', part1(parseInput(input)))

    expect(part1(parseInput(sampleInput))).toEqual(15)
  })

  // it('returns the calories carried by the top three Elves carrying the most calories', () => {
  //   console.log('Output with provided input - part 2', part2(parseInput(input)))

  //   expect(part2(parseInput(sampleInput))).toEqual(45000)
  // })
})
