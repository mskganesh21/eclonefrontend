import {
  Box,
  Button,
  Input,
  Image,
  Avatar,
  FormLabel,
  InputGroup,
  FormControl,
  Switch,
  Divider,
  Icon,
  Text,
  Flex,
  Heading,
  InputRightElement,
  VStack,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaCopyright } from 'react-icons/fa6'
import { IoEye } from 'react-icons/io5'
import axios from '../../api/axios'
import AuthContext from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { setAuth } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleTogglePassword = () => setShowPassword(!showPassword)

  // Use useBreakpointValue to control image visibility
  const showImage = useBreakpointValue({ base: false, md: true })

  const handleLogin = async () => {
    try {
      const response = await axios.post('/user/login', {
        email: email,
        password: password,
      })
      console.log(response.data.data.accessToken, 'rr')
      setAuth(response.data.data.accessToken)
      setRedirectToHome(true) // Set the redirection state to true
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  if (redirectToHome) {
    return <Navigate to="/" />
  }

  return (
    <Flex direction={['column', 'row']} minH="100vh">
      {showImage && (
        <Box w="75%">
          <Image
            src="https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            objectFit="cover"
            h="100%"
            w="100%"
          />
        </Box>
      )}
      <Container maxW="md" py={8}>
        <VStack spacing="2rem" align="stretch">
          <Flex align="center" gap={2}>
            <Avatar />
            <Heading>UI Unicorn</Heading>
          </Flex>
          <Box>
            <Heading as="h4" size="md" mb={4}>
              Nice to see you again
            </Heading>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                id="email-field"
                variant="filled"
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel mt={4}>Password</FormLabel>
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
            <Flex justify="space-between" mt={4}>
              <Flex align="center" gap={2}>
                <Switch id="remember-me" />
                <FormLabel htmlFor="remember-me" mb={0}>
                  Remember Me
                </FormLabel>
              </Flex>
              <Button variant="link">Forgot password?</Button>
            </Flex>
            <Button onClick={handleLogin} w="100%" mt={4} colorScheme="blue">
              Sign in
            </Button>
            <Divider my={4} />
            <Button
              w="100%"
              leftIcon={<Icon as={FcGoogle} />}
              variant="outline"
            >
              Or Sign in with Google
            </Button>
            <Text mt={4} textAlign="center">
              Don&apos;t have an account?{' '}
              <Button variant="link">Sign up now</Button>
            </Text>
          </Box>
          <Text fontSize="sm" textAlign="center">
            <Icon as={FaCopyright} /> 2022 UI Unicorn
          </Text>
        </VStack>
      </Container>
    </Flex>
  )
}

export default Login
