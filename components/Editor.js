import { useState, useEffect } from 'react'
import DrawingBoard from './DrawingBoard'
import { SwatchesPicker } from 'react-color'
import { Flex, Spacer } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Editor = () => {
  const firstColor = SwatchesPicker.defaultProps.colors[0][0]
  const [color, setColor] = useState(firstColor)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_COLOR', color: color })
  }, [dispatch, color])

  function handleChangeComplete (color, evt) {
    setColor(color.hex)
  }

  return (
    <Flex >
      {/* TODO: colors from props of image */}
      <SwatchesPicker color={color} onChangeComplete={handleChangeComplete} height='500' />
      <Spacer />
      <DrawingBoard currentColor={color} width={5} height={5} />
      {/* TODO: add export to png and export to template buttons */}
      <Spacer />
    </Flex>
  )
}

export default Editor