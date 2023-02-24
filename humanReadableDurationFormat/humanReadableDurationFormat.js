// https://www.codewars.com/kata/52742f58faf5485cae000b9a

const DURATION = {
  SECOND: 1,
  MINUTE: 60,
  HOUR: 3600,
  DAY: 86400,
  YEAR: 31536000,
}

const getTimeComponentLabel = (timeUnit, timeComponent) =>
  `${timeUnit}${timeComponent > 1 ? 's' : ''}`

const getTimeComponents = seconds => {
  let loadedSeconds = seconds
  const timeUnits = ['year', 'day', 'hour', 'minute', 'second']
  const timeComponents = []

  timeUnits.forEach(timeUnit => {
    const duration = DURATION[timeUnit.toUpperCase()]
    const timeComponent = Math.floor(loadedSeconds / duration)
    if (timeComponent > 0) {
      const label = getTimeComponentLabel(timeUnit, timeComponent)
      timeComponents.push(`${timeComponent} ${label}`)
      loadedSeconds -= timeComponent * duration
    }
  })

  return timeComponents
}

const getHumanReadableTimeString = timeComponents => {
  if (timeComponents.length === 1) {
    return timeComponents[0]
  }
  const allExceptLast = timeComponents.slice(0, timeComponents.length - 1)
  const last = timeComponents.slice(-1)
  return `${allExceptLast.join(', ')} and ${last}`
}

const formatDuration = seconds => {
  if (seconds === 0) return 'now'
  const timeComponents = getTimeComponents(seconds)
  return getHumanReadableTimeString(timeComponents)
}
