import { useState, useEffect } from 'react'
import DrawingBoard from './DrawingBoard'
import { SwatchesPicker, CirclePicker } from 'react-color'
import { Flex, Spacer, VStack, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'

const Editor = ({ template }) => {
  const firstColor = template ? Object.values(template.pallete)[0] : SwatchesPicker.defaultProps.colors[0][0]

  const [color, setColor] = useState(firstColor)
  const dispatch = useDispatch()
  const showTemplate = useSelector(state => state.showTemplate)

  useEffect(() => {
    dispatch({ type: 'SET_SELECTED_COLOR', color: color })
  }, [dispatch, color])

  function handleChangeComplete (color, evt) {
    setColor(color.hex)
  }

  const width = template ? template.art[0].length : 30
  const height = template ? template.art.length : 30

  return (
    <Flex >
      {template 
        ? <CirclePicker 
            color={color} 
            onChangeComplete={handleChangeComplete} 
            height='500' 
            colors={Object.values(template.pallete)} 
          />
        : <SwatchesPicker 
            color={color} 
            onChangeComplete={handleChangeComplete} 
            height='500' 
          />}
      <Spacer />
      <VStack>
        <DrawingBoard 
          currentColor={color} 
          width={width}
          height={height}
          template={template} 
        />
        <Flex>
          {template && 
          <Button 
            onClick={() => dispatch({ type: 'TOGGLE_TEMPLATE' })}
            leftIcon={showTemplate ? <ViewIcon/> : <ViewOffIcon/>}
          >
            Toggle Template
          </Button>}
        </Flex>
      </VStack>
      
      {/* TODO: add export to png and export to template buttons */}
      <Spacer />
    </Flex>
  )
}

export default Editor
