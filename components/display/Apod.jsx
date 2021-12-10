import PropTypes from 'prop-types'
import { Box, Text, Flex, Image, Heading } from '@chakra-ui/react'

const Apod = ({
  title,
  url,
  explanation,
  date,
  copyright,
  media_types,
  hdurl
}) => {
  return (
    <>
      <Box as="article">
        <Heading as="h1" textAlign="center">
          {title}
        </Heading>
        <Box pt={8}>
          <Image src={url} alt={title} />
        </Box>
        <Box pt={8}>
          <Text lineHeight={{ base: 1.625, lg: 2 }}>{explanation}</Text>
          <Flex pt={8} alignItems="center" justifyContent="space-between">
            <Text>{date}</Text>
            <Text>{copyright}</Text>
          </Flex>
        </Box>
      </Box>
      {/* <Box position="fixed" top={0} left={0} w="100%" h="100vh">
        <Image
          src={hdurl}
          alt={title}
          w="100%"
          h="100%"
          objectFit="cover center"
          bg="#000"
          p={4}
        />
      </Box> */}
    </>
  )
}

Apod.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  explanation: PropTypes.string,
  date: PropTypes.string,
  copyright: PropTypes.string,
  media_types: PropTypes.string
}

export default Apod
