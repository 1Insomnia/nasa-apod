import { useRef } from 'react'
import { useRouter } from 'next/router'
import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react'

const isDate = date => {
  return new Date(date) !== false && !isNaN(new Date(date))
}

const DatePicker = ({ setDate }) => {
  const router = useRouter()
  const inputVal = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const currentInputVal = inputVal.current?.value
    if (
      currentInputVal &&
      currentInputVal.length > 0 &&
      isDate(currentInputVal)
    ) {
      setDate(currentInputVal)
    }
    return
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="date" isRequired>
        <FormLabel htmlFor="date">Pick a date</FormLabel>
        <Flex alignItems="center">
          <Input type="date" name="date" ref={inputVal} mr={4} />
          <Button type="submit">Search</Button>
        </Flex>
      </FormControl>
    </form>
  )
}

export default DatePicker
