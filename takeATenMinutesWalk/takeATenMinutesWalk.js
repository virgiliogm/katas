const WALK_LENGTH = 10

const countStepsByDirection = direction => steps =>
  steps.filter(stepDirection => stepDirection === direction).length

const countStepsToNorth = countStepsByDirection('n')
const countStepsToSouth = countStepsByDirection('s')
const countStepsToEast = countStepsByDirection('e')
const countStepsToWest = countStepsByDirection('w')

const isValidWalk = walk => {
  if (walk.length !== WALK_LENGTH) {
    return false
  }

  const stepsToNorth = countStepsToNorth(walk)
  const stepsToSouth = countStepsToSouth(walk)
  const stepsToEast = countStepsToEast(walk)
  const stepsToWest = countStepsToWest(walk)

  return stepsToNorth === stepsToSouth && stepsToEast === stepsToWest
}
