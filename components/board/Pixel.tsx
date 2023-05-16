import React, { ReactElement, useMemo, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { draw, clear } from '../../redux/reducers/boardSlice'
import { Box, ChakraProps } from '@chakra-ui/react'

type PixelProps = {
  size: number
  row: number
  col: number
}

const Pixel = ({
  size,
  row,
  col,
  ...styleProps
}: PixelProps & ChakraProps): ReactElement => {
  const dispatch = useAppDispatch()
  const { color, baseColor } = useAppSelector((state) => state.board[row][col])
  const selectedColor = useAppSelector((state) => state.selectedColor)
  const showTemplate = useAppSelector((state) => state.showTemplate)

  const [isHover, setIsHover] = useState(false)

  function handleDraw(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    evt.preventDefault()
    evt.stopPropagation()

    if (evt.buttons === 1 && color !== selectedColor) {
      dispatch(draw({ row, col, color: selectedColor }))
    } else if (evt.buttons === 2 && color !== null) {
      dispatch(clear({ row, col }))
    }
  }

  const colorToShow = useMemo(() => {
    if (isHover) return selectedColor
    if (color) return color
    if (showTemplate) return baseColor
    return '#FFFFFF'
  }, [isHover, baseColor, color, selectedColor, showTemplate])

  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
      backgroundColor={colorToShow}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseMove={handleDraw}
      onMouseDown={handleDraw}
      draggable={false}
      {...styleProps}
    />
  )
}

export default Pixel
