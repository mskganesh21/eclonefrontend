import {
  Box,
  Button,
  Divider,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react'
import Asset1 from '../../assets/Asset1.png'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
const Banner = () => {
  const axiosPrivate = useAxiosPrivate()

  const { auth } = useContext(AuthContext)

  const Testapi = async () => {
    console.log(auth)
    const response = await axiosPrivate.get('/private/home')
    console.log(response)
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      h={{ base: 'auto', md: '90vh' }}
      w="100%"
    >
      <Box
        w={{ base: '100%', md: '50%' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box px={{ base: '5%', md: '20%' }} py={{ base: '10%', md: '0' }}>
          <Heading as="h1" mb="2%">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Heading>
          <Text mb="2%">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style
          </Text>
          <Button mb="2%" onClick={Testapi}>
            Shop Now
          </Button>
          <Flex direction={{ base: 'column', sm: 'row' }} flexWrap="wrap">
            <Stack direction="row" h="110px" p={4}>
              <Stack direction="column">
                <Heading>200+</Heading>
                <Text>International Brands</Text>
              </Stack>
              <Divider
                orientation="vertical"
                display={{ base: 'none', sm: 'block' }}
              />
            </Stack>
            <Stack direction="row" h="110px" p={4}>
              <Stack direction="column">
                <Heading>2000+</Heading>
                <Text>High-Quality Products</Text>
              </Stack>
              <Divider
                orientation="vertical"
                display={{ base: 'none', sm: 'block' }}
              />
            </Stack>
            <Stack direction="row" h="110px" p={4}>
              <Stack direction="column">
                <Heading>30000+</Heading>
                <Text>Happy Customers</Text>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Box>
      <Image
        objectFit="cover"
        src={Asset1}
        w={{ base: '100%', md: '50%' }}
        h={{ base: '300px', md: '100%' }}
      />
    </Flex>
  )
}

export default Banner
