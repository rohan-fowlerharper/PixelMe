import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pixel = ({ pixelColor, size, id }) => {
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

  function applyWhite (evt) {
    evt.preventDefault()
    const action = {
      type: 'SET_PIXEL_COLOR',
      id: id,
      color: 'white'
    }
    dispatch(action)
  }

  return (
    <Box
      className="pixel"
      width={`${size}px`}
      height={`${size}px`}
      backgroundColor={isHover ? selectedColor : pixelColor}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={applyColor}
      onContextMenu={applyWhite}
    />
  )
}

export default Pixel
