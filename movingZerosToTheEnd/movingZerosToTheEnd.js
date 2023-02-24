const arrayWithoutZeros = arr => arr.filter(element => element !== 0)

const getZeros = arr => arr.filter(element => element === 0)

const moveZeros = arr => arrayWithoutZeros(arr).concat(getZeros(arr))

// // Just one iteration:

// const moveZeros = arr => {
//   const result = []

//   arr.forEach(number => {
//     if (number === 0) {
//       result.push(number)
//     } else {
//       let firstZeroIndex = result.indexOf(0)

//       if (firstZeroIndex === -1) {
//         result.push(number)
//       } else {
//         result.splice(firstZeroIndex, 0, number)
//       }
//     }
//   })

//   return result
// }

// const moveZeros = arr =>
//   arr.reduce((acc, number) => {
//     if (number === 0) {
//       acc.push(number)

//       return acc
//     }

//     let firstZero = acc.indexOf(0)

//     if (firstZero === -1) {
//       acc.push(number)
//     } else {
//       acc.splice(firstZero, 0, number)
//     }

//     return acc
//   }, [])
