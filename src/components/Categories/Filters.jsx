import AccordianComponent from '../UI/AccordianComponent'
import {
  Box,
  Link,
  VStack,
  Flex,
  Text,
  Button,
  Icon,
  useMediaQuery,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
} from '@chakra-ui/react'
import ColorPicker from './ColorPicker'
import PriceSlider from './PriceSlider'
import Sizes from './Sizes'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoMdOptions } from 'react-icons/io'

const FilterContent = () => (
  <VStack spacing="4" align="stretch">
    <AccordianComponent heading="Price">
      <PriceSlider />
    </AccordianComponent>
    <AccordianComponent heading="Colors">
      <ColorPicker />
    </AccordianComponent>
    <AccordianComponent heading="Sizes">
      <Sizes />
    </AccordianComponent>
    <AccordianComponent heading="Dress Style">
      <VStack align="start" spacing={2} width="100%">
        {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
          <Link
            key={style}
            href={`#${style.toLowerCase()}`}
            width="100%"
            _hover={{ textDecoration: 'none' }}
          >
            <Flex justify="space-between" align="center" width="100%">
              <Text>{style}</Text>
              <ChevronRightIcon />
            </Flex>
          </Link>
        ))}
      </VStack>
    </AccordianComponent>
  </VStack>
)

const Filters = () => {
  const [isDesktop] = useMediaQuery('(min-width: 48em)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (isDesktop) {
    return (
      <Box
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        padding="4"
        // width="30%"
        // height="90vh"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        }}
      >
        <Box mb="4">
          <Flex direction="row" align="center" justify="space-between">
            <Text fontWeight="bold">Filters</Text>
            <Icon as={IoMdOptions} />
          </Flex>
        </Box>
        <FilterContent />
        <Button mt="4" width="100%">
          Apply Filters
        </Button>
      </Box>
    )
  }

  return (
    <>
      <Button onClick={onOpen} leftIcon={<IoMdOptions />}>
        Filters
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent height="90%" borderTopRadius="md">
          <DrawerHeader borderBottomWidth="1px">
            <Flex direction="row" align="center" justify="space-between">
              <Text fontWeight="bold">Filters</Text>
              <Icon as={IoMdOptions} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <FilterContent />
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button width="100%" onClick={onClose}>
              Apply Filters
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Filters
