import { 
  ChakraProvider,
  Container
} from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux'
import store from '../redux/store'
// TODO: add Auth0
// export const getServerSideProps = async (ctx) => {
//   const session = await auth0.getSession(ctx)
//   return {
//     props: {
//       session
//     }
//   }
// }

function MyApp ({ Component, pageProps }) {
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
