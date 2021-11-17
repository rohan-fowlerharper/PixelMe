import { SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import Pixel from './Pixel'
import { useSelector, useDispatch } from 'react-redux'

const DrawingBoard = ({ width, height, template }) => {
  const board = useSelector(state => state.board)
  const dispatch = useDispatch()

  const pixelSize = 16 // TODO: make this a prop based on the size of the canvas
  
  useEffect(() => {
    template 
      ? dispatch({ type: 'CREATE_BOARD_FROM_TEMPLATE', width, height, template: template }) 
      : dispatch({ type: 'CREATE_EMPTY_BOARD', width, height, initialColor: '#ffffff' })
  }, [dispatch, height, width, template])

  return (
    <SimpleGrid
      bg='gray.50'
      columns={width}
      spacingX="1px"
      spacingY="1px"
      height={height*(pixelSize + 1) + 1}
      p="1px"
    >
      {board.map((row, rowIdx) => (
          row.map((pixel, colIdx) => {
            return (
            <Pixel
              key={pixel.id}
              id={pixel.id}
              baseColor={pixel.baseColor}
              pixelColor={pixel.color}
              size={pixelSize}
              row={rowIdx}
              col={colIdx}
            />
          )})
      ))}
    </SimpleGrid>
  )
}

  // width: Math.max(...nyanCat.art.map(line => line.length)),
  // height: nyanCat.art.length
export default DrawingBoard