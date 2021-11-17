import { SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Pixel from './Pixel'
import { useSelector, useDispatch } from 'react-redux'

const DrawingBoard = ({ width, height, template }) => {
  // console.log(template.art[0].split(''))
  const board = useSelector(state => state.board)
  const dispatch = useDispatch()

  const pixelSize = 16
  
  useEffect(() => {
    template 
      ? dispatch({ type: 'CREATE_BOARD_FROM_TEMPLATE', width, height, template: template }) 
      : dispatch({ type: 'CREATE_EMPTY_BOARD', width, height, initialColor: '#ffffff' })
  }, [dispatch, height, width, template])

  function hexToGrayscale (hex = "#ffffff") {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
    // get average luminance with weighting
    const averageLuma = (r + g + b) / 3
    // to hex
    return `#${averageLuma.toString(16).padStart(2, '0')}${averageLuma.toString(16).padStart(2, '0')}${averageLuma.toString(16).padStart(2, '0')}`
  }


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