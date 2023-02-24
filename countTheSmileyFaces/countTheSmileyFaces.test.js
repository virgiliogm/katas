const countSmileys = require('./countTheSmileyFaces')

describe('countSmileys', () => {
  it('returns 0 for an empty array', () => {
    const result = countSmileys([])

    expect(result).toBe(0)
  })

  it('returns the number of provided faces', () => {
    const result = countSmileys([':)', ';~D'])

    expect(result).toBe(2)
  })

  it('counts all valid smiley faces', () => {
    const result = countSmileys([
      ':)',
      ':-)',
      ':~)',
      ':D',
      ':-D',
      ':~D',
      ';)',
      ';-)',
      ';~)',
      ';D',
      ';-D',
      ';~D',
    ])

    expect(result).toBe(12)
  })

  it('does not count invalid smiley faces', () => {
    const result = countSmileys([';]', ':[', ';*', ':$', ';-D'])

    expect(result).toBe(1)
  })
})
