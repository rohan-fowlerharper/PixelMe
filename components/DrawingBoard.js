import { SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import Pixel from './Pixel'

const DrawingBoard = ({ currentColor, width, height }) => {

  const pixelSize = 20
  const [board, setBoard] = useState(
    Array(height)
      .fill(0)
      .map(() => Array(width).fill(0))
  )

  return (
    <SimpleGrid
      bg='gray.50'
      columns={width}
      spacingX="1px"
      spacingY="1px"
      height={height*(pixelSize + 1)}
      p="1px"
    >
      {board.map((row, rowIndex) => (
          row.map((pixel, pixelIndex) => (
            <Pixel
              key={pixelIndex}
              pixelColor={pixel}
              currentColor={currentColor}
              size={pixelSize}
            />
          ))
      ))}
    </SimpleGrid>
  )
}

export default DrawingBoard