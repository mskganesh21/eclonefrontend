import { Box, useBreakpointValue, Flex, Heading, Grid } from '@chakra-ui/react'
import ImageGridGallery from '../../components/ProductDetails/ImageGridGallery'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import ProductTab from '../../components/ProductDetails/ProductTab'
import ProductCard from '../../components/HomePage/ProductCard'

const ProductDetailPage = () => {
  const direction = useBreakpointValue({ base: 'column', md: 'row' })
  const grids = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(4, 1fr)',
  })

  return (
    <Box>
      <Flex direction={direction} align="center" justify="space-between">
        <ImageGridGallery />
        <ProductDetails />
      </Flex>
      <ProductTab />
      <Heading>YOU MIGHT ALSO LIKE</Heading>
      <Grid templateColumns={grids}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Box>
  )
}

export default ProductDetailPage
