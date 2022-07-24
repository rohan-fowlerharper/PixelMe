import { useState, useEffect } from 'react'
import DrawingBoard from './DrawingBoard'
import { SwatchesPicker, CirclePicker } from 'react-color'
import { Flex, Spacer, VStack, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setSelectedColor } from '../redux/reducers/selectedColorSlice'

import {
  createBoardFromTemplate,
  createEmptyBoard,
  HexString,
} from '../redux/reducers/boardSlice'

const Editor = ({ template }: { template?: any }) => {
  const selectedColor = useAppSelector((state) => state.selectedColor)
  const dispatch = useAppDispatch()
  const showTemplate = useAppSelector((state) => state.showTemplate)
  const [hasRendered, setHasRendered] = useState(false)

  function handleChangeComplete(color: { hex: string }) {
    dispatch(setSelectedColor(color.hex as HexString))
  }

  const width = template ? template.art[0].length : 30
  const height = template ? template.art.length : 30

  useEffect(() => {
    if (!hasRendered) {
      template
        ? dispatch(createBoardFromTemplate({ template }))
        : dispatch(createEmptyBoard({ width, height }))
      setHasRendered(true)
    }
  }, [dispatch, height, width, template, hasRendered])

  return (
    <Flex>
      {template ? (
        <CirclePicker
          color={selectedColor}
          onChangeComplete={handleChangeComplete}
          colors={Object.values(template.pallete)}
        />
      ) : (
        <SwatchesPicker
          color={selectedColor}
          onChangeComplete={handleChangeComplete}
        />
      )}
      <Spacer />
      <VStack>
        {hasRendered && <DrawingBoard width={width} height={height} />}
        <Flex>
          {template && (
            <Button
              onClick={() => dispatch({ type: 'TOGGLE_TEMPLATE' })}
              leftIcon={showTemplate ? <ViewIcon /> : <ViewOffIcon />}
            >
              Toggle Template
            </Button>
          )}
        </Flex>
      </VStack>

      {/* TODO: add export to png and export to template buttons */}
      <Spacer />
    </Flex>
  )
}

export default Editor
