const MINIMUM_ZEROS = 4

const zeroPlentiful = numbers => {
  const sequences = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      if (numbers[i - 1] !== 0) {
        sequences.push(0)
      }

      sequences[sequences.length - 1]++
    }
  }

  return sequences.every(numberOfZeros => numberOfZeros >= MINIMUM_ZEROS)
    ? sequences.length
    : 0
}

// class ZeroPlentifulChecker {
//   NUMBER_OF_ZEROS_TO_BE_PLENTIFUL = 4

//   sequences = []

//   value = 0

//   constructor(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] === 0) {
//         if (numbers[i - 1] !== 0) {
//           this.addSequence()
//         }

//         this.incrementLastSequence()
//       }
//     }

//     this.value = this.isZeroPlentiful() ? this.sequences.length : 0
//   }

//   addSequence() {
//     this.sequences.push(0)
//   }

//   incrementLastSequence() {
//     this.sequences[this.sequences.length - 1]++
//   }

//   isZeroPlentiful() {
//     return this.sequences.every(
//       numberOfZeros => numberOfZeros >= this.NUMBER_OF_ZEROS_TO_BE_PLENTIFUL,
//     )
//   }
// }

// const zeroPlentiful = numbers => {
//   const zeroPlentifulChecker = new ZeroPlentifulChecker(numbers)

//   return zeroPlentifulChecker.value
// }
