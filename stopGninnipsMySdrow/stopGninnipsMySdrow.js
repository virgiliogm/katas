const shouldReverse = word => word.length > 4

const reversedWord = word => word.split('').reverse().join('')

const reverseIfAppropriate = word =>
  shouldReverse(word) ? reversedWord(word) : word

const spinWords = string => {
  return string.split(' ').map(reverseIfAppropriate).join(' ')
}
