import { Grid, GridItem, Image, Box, Heading } from '@chakra-ui/react'
import Asset3 from '../../assets/Asset3.png'
import Asset4 from '../../assets/Asset4.png'
import Asset5 from '../../assets/Asset5.png'
import Asset6 from '../../assets/Asset6.png'

const HomePageImageGrid = () => {
  return (
    <Box bg="gray" p={4}>
      <Heading as="h1" textAlign="center" p={4}>
        BROWSE BY DRESS STYLE
      </Heading>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={2}
      >
        <GridItem>
          <Image src={Asset3} alt="Asset 3" w="100%" h="auto" />
        </GridItem>
        <GridItem colSpan={[1, 1, 2]}>
          <Image src={Asset4} alt="Asset 4" w="100%" h="auto" />
        </GridItem>
        <GridItem colSpan={[1, 1, 2]}>
          <Image src={Asset5} alt="Asset 5" w="100%" h="auto" />
        </GridItem>
        <GridItem>
          <Image src={Asset6} alt="Asset 6" w="100%" h="auto" />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default HomePageImageGrid
