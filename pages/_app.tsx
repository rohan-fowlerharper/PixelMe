import { ChakraProvider, Container } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux'
import store from '../redux/store'
import type { AppProps } from 'next/app'

// TODO: add NextAuth

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <NavBar />
        <Container maxW='6xl' mt='10'>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
