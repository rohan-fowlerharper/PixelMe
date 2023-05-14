export type RGB = {
  r: number
  g: number
  b: number
}
export type Lab = ReturnType<typeof rgbToLab>
export type HexString = `#${string}`

export function hexToRgb(hex: HexString | string): RGB {
  hex = hex.replace(/^#/, '')

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

export function rgbToLab(rgb: RGB) {
  const red = rgb.r / 255
  const green = rgb.g / 255
  const blue = rgb.b / 255

  const x = 0.4124564 * red + 0.3575761 * green + 0.1804375 * blue
  const y = 0.2126729 * red + 0.7151522 * green + 0.072175 * blue
  const z = 0.0193339 * red + 0.119192 * green + 0.9503041 * blue

  const xN = x / 0.95047
  const yN = y / 1.0
  const zN = z / 1.08883

  const epsilon = 0.008856
  const kappa = 903.3

  const fx = xN > epsilon ? Math.cbrt(xN) : (kappa * xN + 16) / 116
  const fy = yN > epsilon ? Math.cbrt(yN) : (kappa * yN + 16) / 116
  const fz = zN > epsilon ? Math.cbrt(zN) : (kappa * zN + 16) / 116

  const L = 116 * fy - 16
  const a = 500 * (fx - fy)
  const b = 200 * (fy - fz)

  return { L, a, b }
}

/**
 * Calculate the CIEDE2000 color distance between two RGB colors, see: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @param color1 RGB value 1
 * @param color2 RGB value 2
 * @returns CIEDE2000 color distance, accounting for human perception of colours
 */
export function colorDistance(color1: RGB, color2: RGB) {
  const lab1 = rgbToLab(color1)
  const lab2 = rgbToLab(color2)

  return cieDE2000(lab1, lab2)
}

/**
 * Calculate the CIEDE2000 color distance between two Lab colors, see: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @param lab1 Lab value 1
 * @param lab2 Lab value 2
 * @returns Delta E 2000 color distance
 */
export function cieDE2000(lab1: Lab, lab2: Lab) {
  const kL = 1
  const kC = 1
  const kH = 1.5

  const deltaL = lab2.L - lab1.L
  const C1 = Math.sqrt(lab1.a * lab1.a + lab1.b * lab1.b)
  const C2 = Math.sqrt(lab2.a * lab2.a + lab2.b * lab2.b)
  const deltaC = C2 - C1
  const deltaa = lab2.a - lab1.a
  const deltab = lab2.b - lab1.b
  const deltaH = Math.sqrt(deltaa * deltaa + deltab * deltab - deltaC * deltaC)

  const SL = 1
  const SC = 1 + 0.045 * C1
  const SH = 1 + 0.015 * C1

  const deltaTheta = Math.acos((lab1.a * lab2.a + lab1.b * lab2.b) / (C1 * C2))

  const H =
    Math.abs(deltaa) + Math.abs(deltab) < deltaH
      ? deltaTheta
      : 2 * Math.PI - deltaTheta

  const deltaE = Math.sqrt(
    (deltaL / (kL * SL)) ** 2 +
      (deltaC / (kC * SC)) ** 2 +
      (deltaH / (kH * SH)) ** 2
  )

  return deltaE
}

export function hexToGrayscale(hex = '#ffffff'): HexString {
  const { r, g, b } = hexToRgb(hex)

  if (r === undefined || g === undefined || b === undefined) {
    throw new Error(`Invalid hex string: ${hex}`)
  }

  const averageLuma = Math.floor((r + g + b) / 3)
  const offsetLuma = Math.floor((255 - averageLuma) * 0.6)
  const finalLuma = averageLuma + offsetLuma
  const grayscale = finalLuma.toString(16)

  return `#${grayscale}${grayscale}${grayscale}`
}

// from the Chakra UI color palette: https://chakra-ui.com/docs/styled-system/theme#colors
export const colors = [
  { name: 'black', hex: '#000000' },
  // override gray colors to be neutral
  { name: 'white', hex: '#FFFFFF' },
  { name: 'gray', hex: '#EEEEEE' },
  { name: 'gray', hex: '#DDDDDD' },
  { name: 'gray', hex: '#BBBBBB' },
  { name: 'gray', hex: '#AAAAAA' },
  { name: 'gray', hex: '#999999' },
  { name: 'gray', hex: '#777777' },
  { name: 'gray', hex: '#555555' },
  { name: 'gray', hex: '#333333' },
  { name: 'gray', hex: '#111111' },
  { name: 'red', hex: '#FFF5F5' },
  { name: 'red', hex: '#FED7D7' },
  { name: 'red', hex: '#FEB2B2' },
  { name: 'red', hex: '#FC8181' },
  { name: 'red', hex: '#F56565' },
  { name: 'red', hex: '#E53E3E' },
  { name: 'red', hex: '#C53030' },
  { name: 'red', hex: '#9B2C2C' },
  { name: 'red', hex: '#822727' },
  { name: 'red', hex: '#63171B' },
  { name: 'orange', hex: '#FFFAF0' },
  { name: 'orange', hex: '#FEEBC8' },
  { name: 'orange', hex: '#FBD38D' },
  { name: 'orange', hex: '#F6AD55' },
  { name: 'orange', hex: '#ED8936' },
  { name: 'orange', hex: '#DD6B20' },
  { name: 'orange', hex: '#C05621' },
  { name: 'orange', hex: '#9C4221' },
  { name: 'orange', hex: '#7B341E' },
  { name: 'orange', hex: '#652B19' },
  { name: 'yellow', hex: '#FFFFF0' },
  { name: 'yellow', hex: '#FEFCBF' },
  { name: 'yellow', hex: '#FAF089' },
  { name: 'yellow', hex: '#F6E05E' },
  { name: 'yellow', hex: '#ECC94B' },
  { name: 'yellow', hex: '#D69E2E' },
  { name: 'yellow', hex: '#B7791F' },
  { name: 'yellow', hex: '#975A16' },
  { name: 'yellow', hex: '#744210' },
  { name: 'yellow', hex: '#5F370E' },
  { name: 'green', hex: '#F0FFF4' },
  { name: 'green', hex: '#C6F6D5' },
  { name: 'green', hex: '#9AE6B4' },
  { name: 'green', hex: '#68D391' },
  { name: 'green', hex: '#48BB78' },
  { name: 'green', hex: '#38A169' },
  { name: 'green', hex: '#2F855A' },
  { name: 'green', hex: '#276749' },
  { name: 'green', hex: '#22543D' },
  { name: 'green', hex: '#1C4532' },
  { name: 'teal', hex: '#E6FFFA' },
  { name: 'teal', hex: '#B2F5EA' },
  { name: 'teal', hex: '#81E6D9' },
  { name: 'teal', hex: '#4FD1C5' },
  { name: 'teal', hex: '#38B2AC' },
  { name: 'teal', hex: '#319795' },
  { name: 'teal', hex: '#2C7A7B' },
  { name: 'teal', hex: '#285E61' },
  { name: 'teal', hex: '#234E52' },
  { name: 'teal', hex: '#1D4044' },
  { name: 'blue', hex: '#ebf8ff' },
  { name: 'blue', hex: '#bee3f8' },
  { name: 'blue', hex: '#90cdf4' },
  { name: 'blue', hex: '#63b3ed' },
  { name: 'blue', hex: '#4299e1' },
  { name: 'blue', hex: '#3182ce' },
  { name: 'blue', hex: '#2b6cb0' },
  { name: 'blue', hex: '#2c5282' },
  { name: 'blue', hex: '#2a4365' },
  { name: 'blue', hex: '#1A365D' },
  { name: 'cyan', hex: '#EDFDFD' },
  { name: 'cyan', hex: '#C4F1F9' },
  { name: 'cyan', hex: '#9DECF9' },
  { name: 'cyan', hex: '#76E4F7' },
  { name: 'cyan', hex: '#0BC5EA' },
  { name: 'cyan', hex: '#00B5D8' },
  { name: 'cyan', hex: '#00A3C4' },
  { name: 'cyan', hex: '#0987A0' },
  { name: 'cyan', hex: '#086F83' },
  { name: 'cyan', hex: '#065666' },
  { name: 'purple', hex: '#FAF5FF' },
  { name: 'purple', hex: '#E9D8FD' },
  { name: 'purple', hex: '#D6BCFA' },
  { name: 'purple', hex: '#B794F4' },
  { name: 'purple', hex: '#9F7AEA' },
  { name: 'purple', hex: '#805AD5' },
  { name: 'purple', hex: '#6B46C1' },
  { name: 'purple', hex: '#553C9A' },
  { name: 'purple', hex: '#44337A' },
  { name: 'purple', hex: '#322659' },
  { name: 'pink', hex: '#FFF5F7' },
  { name: 'pink', hex: '#FED7E2' },
  { name: 'pink', hex: '#FBB6CE' },
  { name: 'pink', hex: '#F687B3' },
  { name: 'pink', hex: '#ED64A6' },
  { name: 'pink', hex: '#D53F8C' },
  { name: 'pink', hex: '#B83280' },
  { name: 'pink', hex: '#97266D' },
  { name: 'pink', hex: '#702459' },
  { name: 'pink', hex: '#521B41' },
]
