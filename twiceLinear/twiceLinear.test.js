describe('dblLinear', function () {
  it('Returns 1 when u(0)', () => {
    Test.assertEquals(dblLinear(0), 1)
  })

  it('Returns y(1) when u(1)', () => {
    Test.assertEquals(dblLinear(1), 3)
  })

  it('Returns z(1) when u(2)', () => {
    Test.assertEquals(dblLinear(2), 4)
  })

  it('Returns y(4) before z(3)', () => {
    Test.assertEquals(dblLinear(4), 9)
    Test.assertEquals(dblLinear(5), 10)
  })

  it('Returns z(7) after y(10)', () => {
    Test.assertEquals(dblLinear(9), 21)
    Test.assertEquals(dblLinear(10), 22)
  })

  it('Fulfills Codewars basic tests', function () {
    Test.assertEquals(dblLinear(10), 22)
    Test.assertEquals(dblLinear(20), 57)
    Test.assertEquals(dblLinear(30), 91)
    Test.assertEquals(dblLinear(50), 175)
    Test.assertEquals(dblLinear(100), 447)
  })
})
