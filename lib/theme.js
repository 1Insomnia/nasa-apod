import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    'html, body': {
      color: mode('dark', 'light')(props),
      bg: mode('light', 'dark')(props)
    }
  })
}

const fonts = {
  heading: "'Inter'",
  body: "'Inter'"
}

const colors = {
  dark: '#111',
  light: '#fafafa'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, fonts, colors })

export default theme
