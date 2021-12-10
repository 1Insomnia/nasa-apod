import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NavLink = ({ href, path, text }) => {
  return (
    <NextLink href={href}>
      <Link
        px={2}
        fontWeight={href === path ? 'bold' : 'normal'}
        color={href === path ? 'blue.500' : ''}
        textTransform="capitalize"
      >
        {text}
      </Link>
    </NextLink>
  )
}

NavLink.propTypes = {
  href: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string
}

export default NavLink
