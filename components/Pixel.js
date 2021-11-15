import { Box } from '@chakra-ui/react'
import { useState } from 'react'

const Pixel = (props) => {
  const { currentColor, size } = props

  const tsp = 'transparent'

  const [pixelColor, setPixelColor] = useState(tsp)
  const [prevColor, setPrevColor] = useState(tsp)

  function applyColor (evt) {
    setPrevColor(currentColor)
  }

  function revertColor (evt) {
    setPixelColor(prevColor)
  }

  function hoverColor (evt) {
    setPixelColor(currentColor)
  }

  function colorToWhite (evt) {
    evt.preventDefault()
    setPrevColor(tsp)
  }

  function colorToWhite (evt) {
    evt.preventDefault()
    setPixelColor(tsp)
    setPrevColor(tsp)
  }

  return (
    <Box
      className="pixel"
      width={`${size}px`}
      height={`${size}px`}
      backgroundColor={pixelColor}
      onMouseEnter={hoverColor}
      onMouseLeave={revertColor}
      onClick={applyColor}
      onContextMenu={colorToWhite}
    />
  )
}

export default Pixel
