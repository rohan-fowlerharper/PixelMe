import { useState } from 'react'
import DrawingBoard from './DrawingBoard'
import { SwatchesPicker } from 'react-color'
import { Flex, Spacer } from '@chakra-ui/react'

const Editor = () => {
  const firstColor = SwatchesPicker.defaultProps.colors[0][0]
  const [color, setColor] = useState(firstColor)

  function handleChangeComplete (color, evt) {
    setColor(color.hex)
  }

  return (
    <Flex >
      <SwatchesPicker color={color} onChangeComplete={handleChangeComplete} height='500' />
      <Spacer />
      <DrawingBoard currentColor={color} width={20} height={20} />
      <Spacer />
    </Flex>
  )
}

export default Editor