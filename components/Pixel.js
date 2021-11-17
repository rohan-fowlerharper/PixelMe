import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pixel = ({ pixelColor, baseColor, size, id }) => {
  const dispatch = useDispatch()
  const selectedColor = useSelector(state => state.selectedColor)
  
  const [isHover, setIsHover] = useState(false)

  function applyColor (evt) {
    if (evt.buttons !== 1) return
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
      color: null
    }
    dispatch(action)
  }

  function handleHover (evt) {
    evt.preventDefault()
    if (evt.buttons === 1) {
      applyColor(evt)
    } else if (evt.buttons === 2) {
      removeColor(evt)
      evt.preventDefault()
    }
    setIsHover(true)
  }

  return (
    <Box
      className="pixel"
      width={`${size}px`}
      height={`${size}px`}
      backgroundColor={isHover ? selectedColor : pixelColor ? pixelColor : baseColor}
      onMouseOver={handleHover}
      onMouseDown={applyColor}
      onContextMenu={removeColor}
      onMouseLeave={() => setIsHover(false)}
      onDragStart={(evt) => evt.preventDefault()}
    />
  )
}

export default Pixel
