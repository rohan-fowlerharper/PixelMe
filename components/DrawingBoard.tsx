import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Pixel from './board/Pixel'

const DrawingBoard = ({
  width,
  height,
}: {
  width: number
  height: number
}): React.ReactElement => {
  const PIXEL_SIZE = 16 // TODO: make this a prop based on the size of the canvas

  return (
    <SimpleGrid
      borderLeft='1px solid #EEEEEE'
      borderTop='1px solid #EEEEEE'
      columns={width}
      width={width * PIXEL_SIZE}
      height={height * PIXEL_SIZE}
      onContextMenu={(evt) => evt.preventDefault()}
    >
      {Array.from({ length: height })
        .fill(null)
        .map((_, row) =>
          Array.from({ length: width })
            .fill(null)
            .map((_, col) => (
              <Pixel
                key={`${row}-${col}`}
                row={row}
                col={col}
                size={PIXEL_SIZE}
                borderRight='1px solid #EEEEEE'
                borderBottom='1px solid #EEEEEE'
              />
            ))
        )}
    </SimpleGrid>
  )
}

export default DrawingBoard
