// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) => {
  const regex = new RegExp(`(.*)[${markers.join('')}].*(\n?)`, 'g')
  return input
    .split('\n')
    .map(l => l.replace(regex, '$1$2').trim())
    .join('\n')
}
