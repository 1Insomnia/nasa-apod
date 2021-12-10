import 'inter-ui/inter.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Main from '../components/layouts/Main'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
