import fetchData from '../lib/fetchData'
import { Box, Heading } from '@chakra-ui/react'
import GalleryPost from '../components/display/GalleryPost'

const gallery = ({ data }) => {
  return (
    <Box as="section">
      <Heading as="h1" textAlign="center">
        Gallery
      </Heading>
      <Box mt={8}>
        {data.map(item => (
          <GalleryPost {...item} key={item.title} />
        ))}
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
