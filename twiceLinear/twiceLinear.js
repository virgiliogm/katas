const calcY = x => 2 * x + 1
const calcZ = x => 3 * x + 1

const dblLinear = n => {
  const u = new Set([1])

  let queueY = [calcY(1)]
  let queueZ = [calcZ(1)]

  while (u.size - 1 < n) {
    const y = queueY[0] // 3 // 7 // 7
    const z = queueZ[0] // 4 // 4 // 10

    const choosen = y <= z ? queueY.shift() : queueZ.shift()

    u.add(choosen)

    const newY = calcY(choosen)
    if (!u.has(newY)) {
      queueY.push(newY)
    }

    const newZ = calcZ(choosen)
    if (!u.has(newZ)) {
      queueZ.push(newZ)
    }
  }

  return [...u][n]
}
