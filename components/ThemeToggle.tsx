import { AnimatePresence, motion } from 'framer-motion'
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useColorScheme } from '../hooks/useColorScheme'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const colorScheme = useColorScheme()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Tooltip label='Toggle theme'>
          <IconButton
            aria-label='Toggle theme'
            colorScheme={colorScheme}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            mr={4}
          />
        </Tooltip>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
