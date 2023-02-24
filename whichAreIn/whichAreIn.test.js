// https://www.codewars.com/kata/550554fd08b86f84fe000a58

/*
  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

  Example 1:
  a1 = ["arp", "live", "strong"]

  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

  returns ["arp", "live", "strong"]
*/

const inArray = require('./whichAreIn')

const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

describe('Which are in?', () => {
  test('returns an empty array if there is no match', () => {
    const a1 = ['tarp', 'mice', 'bull']

    expect(inArray(a1, a2)).toStrictEqual([])
  })

  test('returns an array with the strings of a1 which are substrings of strings of a2', () => {
    const a1 = ['xyz', 'live', 'strong']

    expect(inArray(a1, a2)).toStrictEqual(['live', 'strong'])
  })

  test('returns the resulting array sorted in lexicographical order', () => {
    const a1 = ['live', 'strong', 'arp']

    expect(inArray(a1, a2)).toStrictEqual(['arp', 'live', 'strong'])
  })

  test('takes into account target strings including the default array separator', () => {
    const a1 = ['live,', 'strong', 'arp']

    expect(inArray(a1, a2)).toStrictEqual(['arp', 'strong'])
  })
})
