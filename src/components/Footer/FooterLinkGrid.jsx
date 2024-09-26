import {
  Grid,
  GridItem,
  Heading,
  Link,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

const FooterLinkGrid = () => {
  const columns = useBreakpointValue({ base: 2, md: 4 })

  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
      <GridItem>
        <Heading size="md">COMPANY</Heading>
        <VStack align="start" mt={2}>
          <Link>About</Link>
          <Link>Features</Link>
          <Link>Works</Link>
          <Link>Career</Link>
        </VStack>
      </GridItem>
      <GridItem>
        <Heading size="md">HELP</Heading>
        <VStack align="start" mt={2}>
          <Link>Customer Support</Link>
          <Link>Delivery Details</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
        </VStack>
      </GridItem>
      <GridItem>
        <Heading size="md">FAQ</Heading>
        <VStack align="start" mt={2}>
          <Link>Account</Link>
          <Link>Manage Deliveries</Link>
          <Link>Orders</Link>
          <Link>Payments</Link>
        </VStack>
      </GridItem>
      <GridItem>
        <Heading size="md">RESOURCES</Heading>
        <VStack align="start" mt={2}>
          <Link>Free eBooks</Link>
          <Link>Development Tutorial</Link>
          <Link>How to-Blog</Link>
          <Link>Youtube Playlist</Link>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default FooterLinkGrid
