import PropTypes from 'prop-types'
import { Box, Flex, Heading, Container } from '@chakra-ui/react'
import ThemeToggleButton from './ThemeToggle'
import NavLink from './NavLink'

const Header = ({ path }) => {
  return (
    <Box p={4} as="header" shadow="md">
      <Container maxW="container.lg">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex as="nav" alignItems="center">
            <Heading
              as="h1"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing="-0.05em"
              fontSize="1rem"
              lineHeight={1}
              mr={4}
            >
              NASA APOD
            </Heading>
            <NavLink href="/" path={path} text="home" />
            <NavLink href="/archives" path={path} text="archives" />
          </Flex>
          <ThemeToggleButton />
        </Flex>
      </Container>
    </Box>
  )
}

Header.propTypes = {
  path: PropTypes.string
}

export default Header
