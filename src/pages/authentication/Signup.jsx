import {
  Box,
  Button,
  Input,
  Image,
  Link,
  InputGroup,
  FormControl,
  Divider,
  Icon,
  Text,
  Flex,
  Heading,
  InputRightElement,
  VStack,
  Container,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'
import { IoEye } from 'react-icons/io5'
import axios from '../../api/axios'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const toast = useToast()

  const handleTogglePassword = () => setShowPassword(!showPassword)

  // Use useBreakpointValue to control image visibility
  const showImage = useBreakpointValue({ base: false, md: true })

  const handleSignUp = async () => {
    const payload = {
      name,
      email,
      password,
    }

    console.log(payload)

    try {
      const response = await axios.post('/user/register', payload)
      console.log(response.data.data.message)

      toast({
        title: `${response.data.data.message}`,
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error.response.data.data.message)
      toast({
        title: `${error.response.data.data.message}`,
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex direction={['column', 'column', 'row']} minH="100vh">
      {showImage && (
        <Box w={['100%', '100%', '75%']}>
          <Image
            src="https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            objectFit="cover"
            h="100%"
            w="100%"
          />
        </Box>
      )}
      <Container maxW={['100%', '100%', '25%']} py={8}>
        <VStack spacing={4} align="stretch">
          <Heading>Create Account</Heading>
          <Button leftIcon={<Icon as={FcGoogle} />}>Sign up with Google</Button>
          <Button leftIcon={<Icon as={FaFacebook} />}>
            Sign up with Facebook
          </Button>

          <Divider />
          <Text textAlign="center">OR</Text>
          <Divider />
          <FormControl>
            <Input
              id="name-field"
              variant="filled"
              type="text"
              placeholder="Name"
              mb={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="email-field"
              variant="filled"
              type="email"
              placeholder="Email"
              mb={3}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup>
              <Input
                id="password-field"
                variant="filled"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement>
                <Button size="sm" onClick={handleTogglePassword}>
                  <Icon as={IoEye} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button colorScheme="blue" onClick={handleSignUp}>
            Create Account
          </Button>
          <Text textAlign="center">
            Already have an account? <Link>Log In</Link>
          </Text>
        </VStack>
      </Container>
    </Flex>
  )
}

export default SignUp
