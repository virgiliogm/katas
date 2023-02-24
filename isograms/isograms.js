// https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = str => {
  const chars = {}
  for (const char of str.toLowerCase()) {
    if (chars[char]) {
      return false
    }
    chars[char] = true
  }
  return true
}

// const isIsogram = str => {
//   const chars = [] // mejor usar un mapa {} - más eficiente comprobar si eiste key
//   for (const char of str.split('')) {
//     // split no hace falta
//     const c = char.toLowerCase() // toLowerCase en el for
//     if (chars.includes(c)) {
//       return false
//     }
//     chars.push(c)
//   }
//   return true
// }

// const isIsogramFirstApproach = str => {
//   // String to lowerized chars array
//   const lowerChars = str.toLowerCase().split('') // igual, split no hace falta
//   // Create a Set from chars array (so it contains only unique chars)
//   const charsSet = new Set(lowerChars)
//   // Return true if sizes are equal or false otherwise
//   return lowerChars.length === charsSet.size
// }
// // demasiados comentarios
