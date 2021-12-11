import PropTypes from 'prop-types'
import { Box, Image, AspectRatio, Heading, Link, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

const GalleryPost = ({ title, url, explanation, date, media_type }) => {
  return (
    <Box key={title} shadow="xl" as="article">
      {media_type === 'image' ? (
        <Image src={url} objectFit="cover center" alt={title} mt={8} />
      ) : (
        <AspectRatio ratio={16 / 9} mt={8}>
          <iframe src={url} title={title} />
        </AspectRatio>
      )}
      <Flex alignItems="center" mt={4} p={4}>
        <Heading as="h2" fontSize="lg">
          {title}
        </Heading>
        <NextLink href={`/archives?date=${date}`}>
          <Link color="blue.500" ml={4}>
            Post
          </Link>
        </NextLink>
      </Flex>
    </Box>
  )
}

GalleryPost.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  explanation: PropTypes.string,
  date: PropTypes.string,
  media_type: PropTypes.string
}

export default GalleryPost
