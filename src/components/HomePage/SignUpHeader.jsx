import { Box, Link } from '@chakra-ui/react'

const SignUpHeader = () => {
  return (
    <Box bg="#000" color="white" textAlign="center">
      Sign up and get 20% off your first order!
      <Link ml={2}>Sign Up Now</Link>
    </Box>
  )
}

export default SignUpHeader
