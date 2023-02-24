// const GOOD_WORTH = [
//   1, // Hobbits
//   2, // Men
//   3, // Elves
//   3, // Dwarves
//   4, // Eagles
//   10, // Wizards
// ]

// const EVIL_WORTH = [
//   1, // Orcs
//   2, // Men
//   2, // Wargs
//   2, // Goblins
//   3, // Uruk Hai
//   5, // Trolls
//   10, // Wizards
// ]

// const getWorthSum = (racesCountString, racesWorth) =>
//   racesCountString
//     .split(' ')
//     .reduce(
//       (acc, raceCount, raceIndex) =>
//         acc + Number(raceCount) * racesWorth[raceIndex],
//       0,
//     )

// const getBattleResultText = (goodWorth, evilWorth) => {
//   if (goodWorth > evilWorth) {
//     return 'Good triumphs over Evil'
//   }

//   if (goodWorth < evilWorth) {
//     return 'Evil eradicates all trace of Good'
//   }

//   return 'No victor on this battle field'
// }

// const goodVsEvil = (good, evil) => {
//   const goodWorthSum = getWorthSum(good, GOOD_WORTH)
//   const evilWorthSum = getWorthSum(evil, EVIL_WORTH)

//   return `Battle Result: ${getBattleResultText(goodWorthSum, evilWorthSum)}`
// }

const GOOD_WORTH_BY_RACE = {
  hobbits: 1,
  men: 2,
  elves: 3,
  dwarves: 3,
  eagles: 4,
  wizards: 10,
}

const EVIL_WORTH_BY_RACE = {
  orcs: 1,
  men: 2,
  wargs: 2,
  goblins: 2,
  urukHai: 3,
  trolls: 5,
  wizards: 10,
}

const getRacesCount = countString => countString.split(' ').map(Number)

const getWorthSum = (racesCount, racesWorth) =>
  racesCount.reduce(
    (acc, raceCount, raceIndex) => acc + raceCount * racesWorth[raceIndex],
    0,
  )

const getBattleResultText = (goodWorth, evilWorth) => {
  const label = 'Battle Result: '

  if (goodWorth > evilWorth) {
    return `${label}Good triumphs over Evil`
  }

  if (goodWorth < evilWorth) {
    return `${label}Evil eradicates all trace of Good`
  }

  return `${label}No victor on this battle field`
}

const goodVsEvil = (goodRacesCountString, evilRacesCountString) => {
  const goodRacesWorth = Object.values(GOOD_WORTH_BY_RACE)
  const evilRacesWorth = Object.values(EVIL_WORTH_BY_RACE)

  const goodRacesCount = getRacesCount(goodRacesCountString)
  const evilRacesCount = getRacesCount(evilRacesCountString)

  const goodWorthSum = getWorthSum(goodRacesCount, goodRacesWorth)
  const evilWorthSum = getWorthSum(evilRacesCount, evilRacesWorth)

  return getBattleResultText(goodWorthSum, evilWorthSum)
}
