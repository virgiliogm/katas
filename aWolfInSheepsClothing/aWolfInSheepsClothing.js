const option1 = queue => {
  const isWolfCloseToMe = queue => queue.indexOf('wolf') === queue.length - 1

  const getSheepNumber = queue => queue.reverse().indexOf('wolf')

  const warnTheSheep = queue => {
    if (isWolfCloseToMe(queue)) {
      return 'Pls go away and stop eating my sheep'
    }

    const sheepNumber = getSheepNumber(queue)

    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
  }

  warnTheSheep(queue)
}

const option2 = queue => {
  const WOLF = 'wolf'

  const isWolfCloseToMe = queue => queue.indexOf(WOLF) === queue.length - 1

  const getSheepNumber = queue => queue.reverse().indexOf(WOLF)

  const getResponseForWolf = () => 'Pls go away and stop eating my sheep'

  const getWarningForSheep = queue => {
    const sheepNumber = getSheepNumber(queue)

    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
  }

  const warnTheSheep = queue => {
    return isWolfCloseToMe(queue)
      ? getResponseForWolf()
      : getWarningForSheep(queue)
  }

  warnTheSheep(queue)
}
