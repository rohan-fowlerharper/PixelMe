import { useAppSelector } from '../redux/store'
import { colorDistance, hexToRgb, colors } from '../utils/colors'
import type { HexString } from '../utils/colors'

export const useColorScheme = () => {
  const selectedColor = useAppSelector((state) => state.selectedColor)

  const closestColor = getClosestColor(selectedColor)

  if (closestColor === 'black' || closestColor === 'white') {
    return 'gray'
  }

  return closestColor
}

/**
 * Uses the CIEDE2000 color distance algorithm to find the closest color name to the provided color
 * @param hexColor a formatted hex color string, e.g. #FFFFFF
 * @returns the closest plaintext color name, e.g. 'red'
 */
function getClosestColor(hexColor: HexString | string) {
  const selectedColor = hexToRgb(hexColor)

  let closestColor = null
  let minDistance = Infinity

  for (const color of colors) {
    const currentColor = hexToRgb(color.hex)
    const distance = colorDistance(selectedColor, currentColor)

    if (distance < minDistance) {
      closestColor = color.name
      minDistance = distance
    }
  }

  return closestColor as string
}
