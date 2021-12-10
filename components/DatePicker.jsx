import { useRef } from 'react'
import { useRouter } from 'next/router'
import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react'

const isDate = date => {
  return new Date(date) !== false && !isNaN(new Date(date))
}

const DatePicker = () => {
  const router = useRouter()
  const dateRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const date = dateRef.current?.value

    if (date && date.length > 0 && isDate(date)) {
      router.push({
        pathname: '/archives',
        query: { date: date }
      })
    }
    return
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="date" isRequired>
        <FormLabel htmlFor="date">Pick a date</FormLabel>
        <Flex alignItems="center">
          <Input type="date" name="date" ref={dateRef} mr={4} />
          <Button type="submit" bg="blue.500" color="light">
            Search
          </Button>
        </Flex>
      </FormControl>
    </form>
  )
}

export default DatePicker
