import {
  Box,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react'
import Filters from '../../components/Categories/Filters'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ProductCard from '../../components/HomePage/ProductCard'

const Category = () => {
  const grids = useBreakpointValue({
    base: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  })

  return (
    <Box p={4}>
      <Flex>
        {/* Filters section */}
        <Box width={['100%', '30%']} p={4}>
          <Filters />
        </Box>

        {/* Product listing section */}
        <Box width={['100%', '70%']} p={4}>
          <Flex direction="row" align="center" justify="space-between" mb={4}>
            <Heading>Casual</Heading>
            <Flex
              direction="row"
              align="center"
              justify="space-between"
              gap={2}
            >
              <Text>Showing 1-10 of 100 Products</Text>
              <Text>Sort By:</Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Sort By
                </MenuButton>
                <MenuList>
                  <MenuItem>Latest</MenuItem>
                  <MenuItem>Most Popular</MenuItem>
                  <MenuItem>Rating</MenuItem>
                  <MenuItem>Helpful</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          <Grid templateColumns={grids} gap={6}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Box>
      </Flex>
      <Box textAlign="center" mt={8}>
        <Heading as="h1">Pagination</Heading>
      </Box>
    </Box>
  )
}

export default Category
