const { part1, part2, parseInput, input } = require('./aoc_day1')

const sampleInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

describe('Advent of Code - Day 1', () => {
  it('returns the calories carried by the Elf carrying the most calories', () => {
    console.log('Output with provided input - part 1', part1(parseInput(input)))

    expect(part1(parseInput(sampleInput))).toEqual(24000)
  })

  it('returns the calories carried by the top three Elves carrying the most calories', () => {
    console.log('Output with provided input - part 2', part2(parseInput(input)))

    expect(part2(parseInput(sampleInput))).toEqual(45000)
  })
})
