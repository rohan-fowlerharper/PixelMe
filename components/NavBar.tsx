import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useColorScheme } from '../hooks/useColorScheme'
import { LogoGithub } from '@carbon/icons-react'

export default function Navigation() {
  const colorScheme = useColorScheme() || 'gray'
  const bgDarkness = useColorModeValue('200', '700')
  const textDarkness = useColorModeValue('800', '100')

  return (
    <>
      <Flex
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
            PIXELME 🖌️
          </Box>
          <Flex gap='2'>
            <IconButton
              as={Link}
              aria-label="Link to Pixelme's Github"
              colorScheme={colorScheme}
              href='https://github.com/rohan-fowlerharper/pixelme'
              icon={<LogoGithub />}
            />
            <ThemeToggle />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
