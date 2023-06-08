import ThemeToggle from './ThemeToggle'
import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useColorScheme } from '../hooks/useColorScheme'
import { FaGithub } from 'react-icons/fa'

export default function Navigation() {
  const colorScheme = useColorScheme() || 'gray'
  const bgDarkness = useColorModeValue('200', '700')
  const textDarkness = useColorModeValue('800', '100')

  return (
    <>
      <Flex
        as='nav'
        bg={`${colorScheme}.${bgDarkness}`}
        px={4}
        justifyContent='center'
        width='full'
      >
        <Flex
          h={16}
          alignItems='center'
          justifyContent='space-between'
          width='full'
          maxW='5xl'
        >
          <Box
            as={Link}
            href='/'
            fontWeight='extrabold'
            color={`${colorScheme}.${textDarkness}`}
          >
            PIXELS 🖌️
          </Box>
          <Flex gap='2'>
            <Tooltip label='GitHub repository'>
              <IconButton
                as='a'
                aria-label='Github repository'
                aria-hidden='false'
                colorScheme={colorScheme}
                href='https://github.com/rohan-fowlerharper/pixelme'
                icon={<FaGithub />}
              />
            </Tooltip>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
