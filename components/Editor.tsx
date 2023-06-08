import { useState, useEffect, useRef } from 'react'
import { SwatchesPicker, CirclePicker } from 'react-color'
import { Flex, Spacer, VStack, Tooltip, IconButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { FaDownload } from 'react-icons/fa'
import { FiRotateCcw } from 'react-icons/fi'

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
import html2canvas from 'html2canvas'

interface Props {
  template?: Template
}

const Editor = ({ template }: Props) => {
  const selectedColor = useAppSelector((state) => state.selectedColor)
  const dispatch = useAppDispatch()
  const showTemplate = useAppSelector((state) => state.showTemplate)
  const colorScheme = useColorScheme()
  const [hasRendered, setHasRendered] = useState(false)
  const boardRef = useRef<HTMLDivElement>(null)

  const width = template ? template.art[0].length : 32
  const height = template ? template.art.length : 32

  useEffect(() => {
    if (!hasRendered) {
      const action = template
        ? createBoardFromTemplate({ template })
        : createEmptyBoard({ width, height })

      dispatch(action)
      setHasRendered(true)
    }
  }, [dispatch, height, width, template, hasRendered])

  function handleChangeComplete(color: { hex: string }) {
    dispatch(setSelectedColor(color.hex as HexString))
  }

  async function handleDownloadClick() {
    const container = boardRef.current
    if (!container) {
      console.error('Failed to get board container')
      return
    }

    const canvas = await html2canvas(container)

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Failed to convert canvas to blob')
        return
      }
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = url
      link.download = 'pixel-art.png'
      link.click()

      URL.revokeObjectURL(url)
    })
  }

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
        {hasRendered && (
          <DrawingBoard ref={boardRef} width={width} height={height} />
        )}
        <Flex gap={2} justifyContent='flex-end' w='full'>
          {template && (
            <Tooltip label='Toggle Template'>
              <IconButton
                aria-label='Toggle Template'
                icon={showTemplate ? <ViewIcon /> : <ViewOffIcon />}
                onClick={() => dispatch(toggleTemplate())}
                colorScheme={colorScheme}
              />
            </Tooltip>
          )}
          <Tooltip label='Clear Drawing'>
            <IconButton
              aria-label='Clear Drawing'
              icon={<FiRotateCcw />}
              onClick={() => {
                if (template) {
                  dispatch(createBoardFromTemplate({ template }))
                } else {
                  dispatch(createEmptyBoard({ width, height }))
                }
              }}
              colorScheme={colorScheme}
            >
              Clear
            </IconButton>
          </Tooltip>
          <Tooltip label='Download Drawing as PNG'>
            <IconButton
              aria-label='Download Drawing as PNG'
              icon={<FaDownload />}
              onClick={handleDownloadClick}
              colorScheme={colorScheme}
            />
          </Tooltip>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default Editor
