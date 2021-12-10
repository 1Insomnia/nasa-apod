import { Box, Container } from '@chakra-ui/react'
import Header from '../navigation/Header'

const Layout = ({ children, router }) => {
  return (
    <>
      <Header path={router.asPath} />
      <Box as="main" minH="100vh" py={10}>
        <Container maxW="container.lg">{children}</Container>
      </Box>
    </>
  )
}

export default Layout
