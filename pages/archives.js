import { useState, useEffect } from 'react'
import Head from 'next/head'
import fetchData from '../lib/fetchData'
import { Box, Heading } from '@chakra-ui/react'
import Apod from '../components/display/Apod'
import DatePicker from '../components/DatePicker'

const Archives = ({ data, error }) => {
  const [date, setDate] = useState('')
  return (
    <>
      <Head>
        <title>Nasa Astronomy Picture of the Day</title>
        <meta name="description" content="Nasa Astronomy Picture of the Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Box>{!error && <Apod {...data} />}</Box> */}
      <Box>
        <Heading as="h1">Archives</Heading>
        <Box pt={8}>
          <DatePicker setDate={setDate} />
        </Box>
      </Box>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data, error } = await fetchData('date=2021-10-10&')

  return {
    props: {
      data: data,
      error: error
    }
  }
}

export default Archives
