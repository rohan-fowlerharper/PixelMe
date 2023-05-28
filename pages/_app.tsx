import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
      <Analytics />
    </>
  )
}

export default MyApp
