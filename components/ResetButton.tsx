import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Flex,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { useColorScheme } from '../hooks/useColorScheme'
import { BiRotateLeft } from 'react-icons/bi'

export default function ResetButton({ onReset }: { onReset: () => void }) {
  const colorScheme = useColorScheme()
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })

  return (
    <Popover
      isOpen={isOpen}
      closeOnBlur
      closeOnEsc
      onClose={onClose}
      placement='left-start'
    >
      <Tooltip label='Reset Drawing' isDisabled={isOpen}>
        <PopoverTrigger>
          <IconButton
            aria-label='Reset Drawing'
            icon={<BiRotateLeft size={24} />}
            onClick={onOpen}
            colorScheme={colorScheme}
          >
            Clear
          </IconButton>
        </PopoverTrigger>
      </Tooltip>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton onClick={onClose} />
        <PopoverHeader>
          Are you sure you want to reset the canvas? All your progress will be
          lost.
        </PopoverHeader>
        <PopoverBody>
          <Flex justifyContent='end' gap={2}>
            <Button
              colorScheme='red'
              onClick={() => {
                onReset()
                onClose()
              }}
            >
              Yes
            </Button>
            <Button onClick={onClose} variant='outline'>
              No
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
