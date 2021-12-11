import Head from 'next/head'
import fetchData from '../lib/fetchData'
import { Box, Heading } from '@chakra-ui/react'
import Apod from '../components/display/Apod'
import DatePicker from '../components/DatePicker'

const Archives = ({ data, error }) => {
  return (
    <>
      <Head>
        <title>Nasa Astronomy Picture of the Day</title>
        <meta name="description" content="Nasa Astronomy Picture of the Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading as="h1" textAlign="center">
          Archives
        </Heading>
        <Box mt={8}>
          <DatePicker />
        </Box>
      </Box>
      <Box mt={8}>{!error && data && <Apod {...data} />}</Box>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  if (query.date) {
    const { data, error } = await fetchData(`date=${query.date}&`)
    return {
      props: {
        data: data,
        error: error
      }
    }
  }
  return {
    props: {
      data: null,
      error: null
    }
  }
}

export default Archives
