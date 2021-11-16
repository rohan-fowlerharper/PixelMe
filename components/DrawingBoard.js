import { SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Pixel from './Pixel'
import { useSelector, useDispatch } from 'react-redux'

const DrawingBoard = ({ width, height }) => {
  const board = useSelector(state => state.board)
  const dispatch = useDispatch()

  const pixelSize = 50
  
  useEffect(() => {
    dispatch({ type: 'CREATE_EMPTY_BOARD', width, height, initialColor: '#ffffff' })
  }, [dispatch, height, width])

  return (
    <SimpleGrid
      bg='gray.50'
      columns={width}
      spacingX="1px"
      spacingY="1px"
      height={height*(pixelSize + 1)}
      p="1px"
    >
      {board.map((row) => (
          row.map((pixel) => (
            <Pixel
              key={pixel.id}
              id={pixel.id}
              pixelColor={pixel.color}
              size={pixelSize}
            />
          ))
      ))}
    </SimpleGrid>
  )
}

export default DrawingBoard