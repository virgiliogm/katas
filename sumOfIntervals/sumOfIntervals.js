// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

const mergeOverlappingIntervals = intervals => {
  const intervalsCopy = [...intervals]
  intervalsCopy.sort((a, b) => (a[0] < b[0] ? -1 : 1))
  const mergedIntervals = []
  for (let i = 0; i < intervalsCopy.length;) {
    let nextIndex
    for (let j = i + 1; j < intervalsCopy.length; j += 1) {
      if (intervalsCopy[j][0] < intervalsCopy[i][1]) {
        if (intervalsCopy[j][1] > intervalsCopy[i][1]) {
          intervalsCopy[i][1] = intervalsCopy[j][1]
        }
        nextIndex = j + 1
      } else {
        nextIndex = j
        break
      }
    }
    mergedIntervals.push(intervalsCopy[i])
    i = nextIndex
  }
  return mergedIntervals
}

const intervalLength = interval => interval[1] - interval[0]

const sumIntervals = intervals => {
  const mergedIntervals = mergeOverlappingIntervals(intervals)
  return mergedIntervals.reduce((acc, interval) => acc + intervalLength(interval), 0)
}