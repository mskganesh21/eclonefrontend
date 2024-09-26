import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Divider,
  Input,
  Button,
} from '@chakra-ui/react'

const PriceCard = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6}>
      <VStack spacing={4} align="stretch">
        <Heading size="lg" mb={2}>
          Order Summary
        </Heading>

        <Flex justify="space-between">
          <Text>SubTotal</Text>
          <Text fontWeight="bold">$120</Text>
        </Flex>

        <Flex justify="space-between">
          <Text>Discount (-20%)</Text>
          <Text fontWeight="bold" color="green.500">
            -$24
          </Text>
        </Flex>

        <Flex justify="space-between">
          <Text>Delivery Fee</Text>
          <Text fontWeight="bold">$15</Text>
        </Flex>

        <Divider borderWidth="2px" my={2} />

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="bold">
            Total
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            $111
          </Text>
        </Flex>

        <Flex direction="row" gap={2}>
          <Input
            flex={1}
            borderRadius="12px"
            variant="filled"
            placeholder="Add Promo Code"
          />
          <Button borderRadius="12px" colorScheme="red">
            Apply
          </Button>
        </Flex>

        <Button borderRadius="12px" colorScheme="red" size="lg" mt={2}>
          Go to Checkout
        </Button>
      </VStack>
    </Box>
  )
}

export default PriceCard
