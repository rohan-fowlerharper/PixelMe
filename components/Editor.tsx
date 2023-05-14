import { useState, useEffect } from 'react'
import { SwatchesPicker, CirclePicker } from 'react-color'
import { Flex, Spacer, VStack, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import DrawingBoard from './DrawingBoard'
import { setSelectedColor } from '../redux/reducers/selectedColorSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import {
  createBoardFromTemplate,
  createEmptyBoard,
} from '../redux/reducers/boardSlice'
import { toggleTemplate } from '../redux/reducers/showTemplate'
import { useColorScheme } from '../hooks/useColorScheme'
import { HexString } from '../utils/colors'
import { Template } from '../types/template'

const Editor = ({ template }: { template?: Template }) => {
  const selectedColor = useAppSelector((state) => state.selectedColor)
  const dispatch = useAppDispatch()
  const showTemplate = useAppSelector((state) => state.showTemplate)
  const colorScheme = useColorScheme()
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
              onClick={() => dispatch(toggleTemplate())}
              leftIcon={showTemplate ? <ViewIcon /> : <ViewOffIcon />}
              colorScheme={colorScheme}
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
