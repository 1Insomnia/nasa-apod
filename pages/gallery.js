import fetchData from '../lib/fetchData'
import { Box, Heading, Image, VStack, AspectRatio } from '@chakra-ui/react'

const gallery = ({ data }) => {
  return (
    <Box as="section">
      <Heading as="h1" textAlign="center">
        Gallery
      </Heading>
      <Box mt={8}>
        <VStack alignItems="start">
          {data.map(item => (
            <Box key={item.title} p={4}>
              {item.media_type === 'image' ? (
                <Image
                  src={item.url}
                  objectFit="cover center"
                  alt={item.title}
                  mt={8}
                />
              ) : (
                <AspectRatio ratio={16 / 9} mt={8}>
                  <iframe src={item.url} title={item.title} />
                </AspectRatio>
              )}
              <Heading as="h2" fontSize="text.xl" mt={4}>
                {item.title}
              </Heading>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  )
}

export const getServerSideProps = async () => {
  const { data, error } = await fetchData('count=10&')

  return {
    props: {
      data: data,
      error: error
    }
  }
}

export default gallery
