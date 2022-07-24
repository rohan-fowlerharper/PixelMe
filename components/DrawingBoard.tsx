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
  const pixelSize = 16 // TODO: make this a prop based on the size of the canvas
  return (
    <SimpleGrid
      borderLeft='1px solid #EEEEEE'
      borderTop='1px solid #EEEEEE'
      columns={width}
      width={width * pixelSize}
      height={height * pixelSize}
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
                size={pixelSize}
                borderRight='1px solid #EEEEEE'
                borderBottom='1px solid #EEEEEE'
              />
            ))
        )}
    </SimpleGrid>
  )
}

// width: Math.max(...nyanCat.art.map(line => line.length)),
// height: nyanCat.art.length
export default DrawingBoard
