import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IoTrashBin } from 'react-icons/io5'

const CartCard = () => {
  return (
    <Box border="1px solid black" p={4}>
      <Flex direction="row" gap={4} align="center">
        <Image
          src="https://picsum.photos/200/200"
          maxW="150px" // Set a max width for the image
          alignSelf="center"
        />
        <VStack width="100%" align="stretch">
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            width="100%"
          >
            <Heading size="md">Gradient Graphic T-Shirt</Heading>
            <IconButton icon={<IoTrashBin />} aria-label="Delete item" />
          </Flex>
          <Text>Size: Large</Text>
          <Text>Color: White</Text>
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            width="100%"
          >
            <Heading size="md">$145</Heading>
            <Flex gap={2} align="center" bg="gray.600" p={2} rounded="18px">
              <IconButton
                icon={<FaMinus />}
                size="sm"
                aria-label="Decrease quantity"
              />
              <Heading as="h6" size="sm">
                1
              </Heading>
              <IconButton
                icon={<FaPlus />}
                size="sm"
                aria-label="Increase quantity"
              />
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  )
}

export default CartCard
