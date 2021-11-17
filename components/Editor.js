import { useState, useEffect } from 'react'
import DrawingBoard from './DrawingBoard'
import { SwatchesPicker, CirclePicker } from 'react-color'
import { Flex, Spacer } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Editor = ({ template }) => {
  const firstColor = SwatchesPicker.defaultProps.colors[0][0]
  const [color, setColor] = useState(firstColor)
  const dispatch = useDispatch()
  console.log(Object.values(template.pallete))

  useEffect(() => {
    dispatch({ type: 'SET_COLOR', color: color })
  }, [dispatch, color])

  function handleChangeComplete (color, evt) {
    setColor(color.hex)
  }

  const width = template.art[0].length ?? 5
  const height = template.art.length ?? 5

  return (
    <Flex >
      {/* TODO: set default colors from template*/}
      {template 
      ? <CirclePicker color={color} onChangeComplete={handleChangeComplete} height='500' colors={Object.values(template.pallete)} />
      : <SwatchesPicker color={color} onChangeComplete={handleChangeComplete} height='500' />}
      <Spacer />
      <DrawingBoard currentColor={color} width={width} height={height} template={template} />
      {/* TODO: add export to png and export to template buttons */}
      <Spacer />
    </Flex>
  )
}

export default Editor