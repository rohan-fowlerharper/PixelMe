// import 'tailwindcss/tailwind.css'
import { 
  ChakraProvider,
  Container
} from '@chakra-ui/react'
import theme from '../components/theme'
import NavBar from '../components/NavBar'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Container maxW='6xl' mt='10'>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
