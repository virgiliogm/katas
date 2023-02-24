// const inArray = (a1, a2) => {
//   const result = []

//   for (let i = 0; i < a1.length; i++) {
//     const a1Element = a1[i]

//     for (let j = 0; j < a2.length; j++) {
//       const a2Element = a2[j]

//       if (a2Element.includes(a1Element)) {
//         result.push(a1Element)
//         break
//       }
//     }
//   }

//   return result.sort()
// }

// const inArray = (a1, a2) => {
//   const a2String = a2.join()

//   const result = a1.filter(element => a2String.includes(element))

//   return result.sort()
// }

// const isElementInList = (element, list) => {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].includes(element)) {
//       return true
//     }
//   }

//   return false
// }

// const isElementInList = list => element => {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].includes(element)) {
//       return true
//     }
//   }

//   return false
// }

const isElementInList = list => element =>
  list.some(listElement => listElement.includes(element))

const inArray = (stringsToLookFor, mainStrings) => {
  const isIncludedInMainStrings = isElementInList(mainStrings)

  const foundStrings = stringsToLookFor.filter(isIncludedInMainStrings)

  return foundStrings.sort()
}

// const inArray = (stringsToLookFor, mainStrings) => {
//   const isIncludedInMainStrings = element =>
//     mainStrings.some(mainString => mainString.includes(element))

//   const foundStrings = stringsToLookFor.filter(isIncludedInMainStrings)

//   return foundStrings.sort()
// }

module.exports = inArray
