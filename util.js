export function hexToGrayscale (hex = "#ffffff") {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  const averageLuma = Math.floor(((r + g + b) / 3))
  const offsetLuma = Math.floor((255 - averageLuma) * 0.6)
  const finalLuma = averageLuma + offsetLuma
  const grayscale = finalLuma.toString(16)
  return `#${grayscale}${grayscale}${grayscale}`
}