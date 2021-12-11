import PropTypes from 'prop-types'
import { Box, Text, Flex, Image, Heading, AspectRatio } from '@chakra-ui/react'

const Apod = ({
  title,
  url,
  explanation,
  date,
  copyright,
  media_type,
  hdurl
}) => {
  return (
    <>
      <Box as="article">
        <Heading as="h1" textAlign="center">
          {title}
        </Heading>
        <Box pt={8}>
          {media_type === 'image' ? (
            <Image src={url} objectFit="cover center" alt={title} mt={8} />
          ) : (
            <AspectRatio ratio={16 / 9} mt={8}>
              <iframe src={url} title={title} />
            </AspectRatio>
          )}
        </Box>
        <Box pt={8}>
          <Text lineHeight={{ base: 1.625, lg: 2 }}>{explanation}</Text>
          <Flex pt={8} alignItems="center" justifyContent="space-between">
            <Text>{date}</Text>
            {copyright && <Text>&copy; {copyright}</Text>}
          </Flex>
        </Box>
      </Box>
    </>
  )
}

Apod.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  explanation: PropTypes.string,
  date: PropTypes.string,
  copyright: PropTypes.string,
  media_type: PropTypes.string
}

export default Apod
