import {
  Flex,
  Box,
  Stack,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import { IoMailOpenOutline } from 'react-icons/io5'

const NewsLetter = () => {
  return (
    <Flex
      p={10}
      bg="blue"
      direction={['column', 'row']}
      justifyContent={['center', 'space-between']}
      alignItems={['stretch', 'center']}
      gap={4}
    >
      <Box flexGrow="1" mb={[4, 0]}>
        <Heading as="h1" size={['md', 'lg']}>
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </Heading>
      </Box>
      <Box width={['100%', 'auto']}>
        <Stack spacing={2}>
          <InputGroup>
            <InputLeftElement>
              <IoMailOpenOutline />
            </InputLeftElement>
            <Input type="email" placeholder="Enter your email" />
          </InputGroup>
          <Button>Subscribe to Newsletter</Button>
        </Stack>
      </Box>
    </Flex>
  )
}

export default NewsLetter
