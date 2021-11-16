// import 'tailwindcss/tailwind.css'
import { 
  ChakraProvider,
  Container
} from '@chakra-ui/react'
import theme from '../components/theme'
import NavBar from '../components/NavBar'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

function MyApp ({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Container maxW='6xl' mt='10'>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default MyApp
