import {
  Divider,
  Box,
  Flex,
  Text,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { CgPaypal } from 'react-icons/cg'

const FooterLastPart = () => {
  const direction = useBreakpointValue({ base: 'column', md: 'row' })
  const alignItems = useBreakpointValue({ base: 'center', md: 'center' })

  return (
    <Box mt="40px">
      <Divider
        orientation="horizontal"
        borderColor="gray.600"
        borderWidth="3px"
      />
      <Flex
        direction={direction}
        justify="space-between"
        align={alignItems}
        p={4}
      >
        <Text>Shop.co @ 2000-2023, All Rights Reserved</Text>
        <HStack
          justifyContent={useBreakpointValue({
            base: 'center',
            md: 'flex-end',
          })}
          width="100%"
        >
          <FaCcVisa />
          <CgPaypal />
          <FaCcMastercard />
          <FaCcVisa />
        </HStack>
      </Flex>
    </Box>
  )
}

export default FooterLastPart
