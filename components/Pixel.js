import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pixel = ({ pixelColor, baseColor, size, id }) => {
  const dispatch = useDispatch()
  const selectedColor = useSelector(state => state.selectedColor)
  
  const [isHover, setIsHover] = useState(false)

  function applyColor (evt) {
    const action = {
      type: 'SET_PIXEL_COLOR',
      id: id,
      color: selectedColor
    }
    dispatch(action)
    setIsHover(false)
  }

  function removeColor (evt) {
    evt.preventDefault()
    const action = {
      type: 'SET_PIXEL_COLOR',
      id: id,
      color: undefined
    }
    dispatch(action)
  }

  return (
    <Box
      className="pixel"
      width={`${size}px`}
      height={`${size}px`}
      backgroundColor={isHover ? selectedColor : pixelColor ? pixelColor : baseColor}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={applyColor}
      onContextMenu={removeColor}
    />
  )
}

export default Pixel
