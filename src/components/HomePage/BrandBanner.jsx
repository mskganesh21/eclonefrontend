import { Heading, Flex } from '@chakra-ui/react'

const BrandBanner = () => {
  return (
    <Flex
      minH="10vh"
      px="5%"
      py="3%"
      direction="row"
      align="center"
      justify="space-around"
      bg="gray"
      flexWrap="wrap"
      gap={4}
    >
      <Heading as="h1" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
        VERSACE
      </Heading>
      <Heading as="h1" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
        ZARA
      </Heading>
      <Heading as="h1" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
        GUCCI
      </Heading>
      <Heading as="h1" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
        PRADA
      </Heading>
      <Heading as="h1" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
        Calvin Klein
      </Heading>
    </Flex>
  )
}

export default BrandBanner
