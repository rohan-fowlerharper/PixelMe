import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pixel = ({ size, pixel }) => {
  const { row, col, color, baseColor, id } = pixel
  const dispatch = useDispatch()
  const selectedColor = useSelector(state => state.selectedColor)
  const showTemplate = useSelector(state => state.showTemplate)
  
  const [isHover, setIsHover] = useState(false)

  function applyColor (evt) {
    const action = {
      type: 'SET_PIXEL_COLOR',
      id,
      color: selectedColor,
      col,
      row
    }
    dispatch(action)
  }

  function removeColor (evt) {
    evt.preventDefault()
    const action = {
      type: 'SET_PIXEL_COLOR',
      id,
      color: null,
      col,
      row
    }
    dispatch(action)
  }

  function handleHover (evt) {
    setIsHover(true)
    if (evt.buttons === 1) {
      applyColor()
    }
    if (evt.buttons === 2) {
      removeColor(evt)
      evt.preventDefault()
    }
  }

  function handleMouseDown (evt) {
    evt.preventDefault()
    if (evt.buttons === 1) {
      applyColor()
    }
    if (evt.buttons === 2) {
      removeColor(evt)
    }
  }
  
  const colorToShow = () => {
    if (isHover) return selectedColor
    if (color) return color
    if (showTemplate) return baseColor
    return '#FFFFFF'
  }

  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
      backgroundColor={colorToShow}
      onMouseEnter={handleHover}
      onMouseDown={handleMouseDown}
      onMouseLeave={() => setIsHover(false)}
      onDragStart={(evt) => evt.preventDefault()}
    />
  )
}

export default Pixel
