import PriceCard from '../../components/cart/PriceCard'
import CartItems from '../../components/cart/CartItems'
import { Flex, Box, useBreakpointValue, Heading } from '@chakra-ui/react'

const Cart = () => {
  const direction = useBreakpointValue({ base: 'column', md: 'row' })

  return (
    <>
      <Heading>YOUR CART</Heading>
      <Flex direction={direction} gap={4} p={4}>
        <Box flexGrow={1}>
          <CartItems />
        </Box>
        <PriceCard />
      </Flex>
    </>
  )
}

export default Cart
