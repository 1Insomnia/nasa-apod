import { Box, Container, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" p={4}>
      <Container maxW="container.lg">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>&copy; Jeremy LP</Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
