import { ChakraProvider, Container } from '@chakra-ui/react'
import Navigation from '../components/NavBar'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

const inter = Inter({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.className}>
        <Provider store={store}>
          <ChakraProvider>
            <Navigation />
            <Container maxW='5xl' mt='10'>
              <Component {...pageProps} />
            </Container>
          </ChakraProvider>
        </Provider>
      </main>
      <Analytics />
    </>
  )
}

export default MyApp
