import {
  Box,
  Heading,
  VStack,
  Text,
  Divider,
  Button,
  IconButton,
  Flex,
} from '@chakra-ui/react'
import ReactStars from 'react-rating-stars-component'
import { FaPlus, FaMinus } from 'react-icons/fa'

const ProductDetails = () => {
  return (
    <Box p={4}>
      <VStack>
        <Heading>ONE LIFE GRAPHIC T-SHIRT</Heading>
        <Flex direction="row" align="center" gap={4}>
          {' '}
          <ReactStars
            count={5}
            activeColor="#ffd700"
            color="white"
            isHalf={true}
            value={4.5}
            size={24}
            edit={false}
          />
          <Text>4.5 / 5</Text>
        </Flex>
        <Flex direction="row" align="center" gap={4}>
          <Text>$260</Text>
          <Text textDecoration="line-through">$300</Text>
          <Text color="red.500" bg="red.100" rounded="lg" p={2}>
            -40%
          </Text>
        </Flex>

        <Text>
          The graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </Text>
        <Divider />
        <Text align="left">Select Colors</Text>
        {/* color picker */}

        <Divider />

        <Text>Choose Size</Text>
        <Flex direction="row" gap={2} align="center">
          <Button>Small</Button>
          <Button>Medium</Button>
          <Button>Large</Button>
          <Button>X-large</Button>
        </Flex>

        <Divider />
        <Flex direction="row" gap={2} align="center">
          <Flex
            gap={2}
            direction="row"
            align="center"
            bg="gray.600"
            p={2}
            rounded="18px"
          >
            <IconButton icon={<FaMinus />} />
            <Heading as="h6">1</Heading>
            <IconButton icon={<FaPlus />} />
          </Flex>
          <Button>Add to Cart</Button>
        </Flex>
      </VStack>
    </Box>
  )
}

export default ProductDetails
