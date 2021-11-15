import { Box } from '@chakra-ui/react'
import { useState } from 'react'

const Pixel = (props) => {
  const { currentColor, size } = props

  const [pixelColor, setPixelColor] = useState('transparent')
  const [prevColor, setPrevColor] = useState('transparent')

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
    setPrevColor('transparent')
  }

  function colorToWhite (evt) {
    evt.preventDefault()
    setPixelColor('transparent')
    setPrevColor('transparent')
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
