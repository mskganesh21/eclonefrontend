import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Box,
  Button,
  Grid,
  Heading,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ReviewCard from '../HomePage/ReviewCard'
import useProductsDisplay from '../../hooks/useProductsDisplay'
import generateArray from '../../utils/GenerateArray'
import { IoMdOptions } from 'react-icons/io'
import ModalComponent from '../UI/ModalComponent'

const ReviewsArray = generateArray(12)

const ProductTab = () => {
  const { showAll, visibleProducts, toggleShowAll } = useProductsDisplay({
    products: ReviewsArray,
    limit: 6,
  })

  return (
    <Tabs>
      <TabList>
        <Box display="flex" width="100%">
          <Tab flex={['auto', '1']} mr={[0, 2]}>
            Product Details
          </Tab>
          <Tab flex={['auto', '1']} mx={[0, 2]}>
            Rating & Reviews
          </Tab>
          <Tab flex={['auto', '1']} ml={[0, 2]}>
            FAQs
          </Tab>
        </Box>
      </TabList>

      <TabPanels>
        <TabPanel>
          <>
            <Text>This is an amazing T-shirt</Text>
          </>
        </TabPanel>
        <TabPanel>
          <Box>
            <Flex justifyContent="space-between" direction="row" align="center">
              <Heading>All Reviews (12)</Heading>
              <Flex direction="row" gap={2} align="center">
                <IconButton icon={<IoMdOptions />} />
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Sort By
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Latest</MenuItem>
                    <MenuItem>Oldest</MenuItem>
                    <MenuItem>Rating</MenuItem>
                    <MenuItem>Helpful</MenuItem>
                  </MenuList>
                </Menu>
                <ModalComponent />
              </Flex>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {visibleProducts.map((item) => (
                <Box key={item}>
                  <ReviewCard />
                </Box>
              ))}
            </Grid>
            <Button mt={4} alignContent="center" onClick={toggleShowAll}>
              {showAll ? 'Load Less Reviews' : 'Load More Reviews'}
            </Button>
          </Box>
        </TabPanel>
        <TabPanel>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProductTab
