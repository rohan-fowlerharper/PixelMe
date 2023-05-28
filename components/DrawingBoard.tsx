import { SimpleGrid } from '@chakra-ui/react'
import { forwardRef } from 'react'
import Pixel from './board/Pixel'

interface Props {
  width: number
  height: number
}

// forwardRef trips up ESLint
// eslint-disable-next-line react/display-name
const DrawingBoard = forwardRef(
  ({ width, height }: Props, boardRef: React.Ref<HTMLDivElement>) => {
    const PIXEL_SIZE = 16 // TODO: make this a prop based on the size of the canvas

    return (
      <>
        <SimpleGrid
          ref={boardRef}
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
      </>
    )
  }
)

export default DrawingBoard
