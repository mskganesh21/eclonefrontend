import { Box, Heading, Text, HStack } from '@chakra-ui/react'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

const CompanyFooter = () => {
  return (
    <Box>
      <Heading>SHOP.CO</Heading>
      <Text>
        We have clothes that suits your style and which you're proud to wear.
        From women to men
      </Text>
      <HStack gap={2}>
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
      </HStack>
    </Box>
  )
}

export default CompanyFooter
