// const VALID_EYES = [':', ';']
// const VALID_NOSES = ['', '-', '~']
// const VALID_MOUTHS = [')', 'D']

// const hasValidEyes = face => VALID_EYES.includes(face[0])

// const hasValidNose = face =>
//   face.length === 2 || (face.length === 3 && VALID_NOSES.includes(face[1]))

// const hasValidMouth = face => VALID_MOUTHS.includes(face[face.length - 1])

// const isValidSmileyFace = face => {
//   if (face.length < 2 || face.length > 3) {
//     return false
//   }

//   return hasValidEyes(face) && hasValidNose(face) && hasValidMouth(face)
// }

const isValidSmileyFace = face => {
  const eyesOptions = '[:;]'
  const noseOptions = '[-~]?'
  const mouthOptions = '[)D]'
  const validSmileyFaceRegex = new RegExp(
    `^${eyesOptions}${noseOptions}${mouthOptions}$`,
  )

  const private = 'no'

  return validSmileyFaceRegex.test(face)
}

const countSmileys = faces => faces.filter(isValidSmileyFace).length

module.exports = countSmileys
