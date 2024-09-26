import { Heading, Flex, Button, Box, IconButton } from '@chakra-ui/react'
import Banner from '../../components/HomePage/Banner'
import BrandBanner from '../../components/HomePage/BrandBanner'
import ProductCard from '../../components/HomePage/ProductCard'
import generateArray from '../../utils/GenerateArray'
import useProductsDisplay from '../../hooks/useProductsDisplay'
import HomePageImageGrid from '../../components/HomePage/ImageGrid'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useRef } from 'react'
import ReviewCard from '../../components/HomePage/ReviewCard'

const HomePage = () => {
  const NewArrivalsArray = generateArray(25)
  const TopSellingArray = generateArray(25)
  const ReviewsArray = generateArray(25)

  const reviewsContainerRef = useRef(null)

  const {
    visibleProducts: NewArrivalProducts,
    showAll,
    toggleShowAll,
  } = useProductsDisplay({
    products: NewArrivalsArray,
    limit: 4,
  })

  const { visibleProducts: TopSellingProducts } = useProductsDisplay({
    products: TopSellingArray,
    limit: 4,
  })

  const handleScrollLeft = () => {
    reviewsContainerRef.current.scrollBy({
      left: -200, // Adjust the scroll amount as needed
      behavior: 'smooth',
    })
  }

  const handleScrollRight = () => {
    reviewsContainerRef.current.scrollBy({
      left: 200, // Adjust the scroll amount as needed
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Banner />
      <BrandBanner />
      <Heading as="h1" textAlign="center" mb={4}>
        NEW ARRIVALS
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {NewArrivalProducts.map((item) => (
          <Box key={item} m={2}>
            <ProductCard />
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'View All'}
        </Button>
      </Flex>
      <Heading as="h1" textAlign="center" mb={4}>
        TOP SELLING
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {TopSellingProducts.map((item) => (
          <Box key={item} m={2}>
            <ProductCard />
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'View All'}
        </Button>
      </Flex>
      <HomePageImageGrid />
      <Flex direction="row" align="center" justify="space-between" mt={8}>
        <Heading as="h1">OUR HAPPY CUSTOMERS</Heading>
        <Flex direction="row" gap={4}>
          <IconButton
            icon={<FaArrowLeftLong />}
            aria-label="Scroll left"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            onClick={handleScrollLeft}
          />
          <IconButton
            icon={<FaArrowRightLong />}
            aria-label="Scroll right"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            onClick={handleScrollRight}
          />
        </Flex>
      </Flex>
      <Flex
        ref={reviewsContainerRef}
        overflowX="scroll"
        mt={4}
        pb={4}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {ReviewsArray.map((item) => (
          <Box key={item} flex="0 0 auto" m={2} minWidth="250px">
            <ReviewCard />
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default HomePage
