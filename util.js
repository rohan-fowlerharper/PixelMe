export function hexToGrayscale (hex = "#ffffff") {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  const averageLuma = Math.floor(((r + g + b) / 3))
  return `#${averageLuma.toString(16).padStart(2, '0')}${averageLuma.toString(16).padStart(2, '0')}${averageLuma.toString(16).padStart(2, '0')}`
}