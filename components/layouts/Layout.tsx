import { Inter } from 'next/font/google'
import Navigation from '../NavBar'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { useColorScheme } from '../../hooks/useColorScheme'

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()
  const bgDarkness = useColorModeValue('50', '1000')

  return (
    <Box
      className={inter.className}
      minH='100vh'
      bg={`${colorScheme}.${bgDarkness}`}
    >
      <Navigation />
      <Container as='main' maxW='5xl' pt='10' height='full'>
        {children}
      </Container>
    </Box>
  )
}
