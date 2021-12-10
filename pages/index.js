import Head from 'next/head'
import fetchData from '../lib/fetchData'
import { Box } from '@chakra-ui/react'
import Apod from '../components/display/Apod'

const Home = ({ data, error }) => {
  return (
    <>
      <Head>
        <title>Nasa Astronomy Picture of the Day</title>
        <meta name="description" content="Nasa Astronomy Picture of the Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="section">{!error && <Apod {...data} />}</Box>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data, error } = await fetchData()

  return {
    props: {
      data: data,
      error: error
    }
  }
}

export default Home
