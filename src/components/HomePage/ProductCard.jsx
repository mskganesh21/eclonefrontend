import {
  Image,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
  Flex,
} from '@chakra-ui/react'
import Asset2 from '../../assets/Asset2.png'
import ReactStars from 'react-rating-stars-component'

const ProductCard = () => {
  return (
    <Card minW="380px" maxW="400px">
      <CardBody>
        <Image bg="gray" src={Asset2} />
        <Stack>
          <Heading>T-shirt with Tape Details</Heading>
          <Flex direction="row" align="center" gap={6}>
            <ReactStars
              count={5}
              activeColor="#ffd700"
              color="white"
              isHalf={true}
              value={3.5}
              size={24}
              edit={false}
            />
            <Text>4.5 / 5</Text>
          </Flex>
          <Text>$120</Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ProductCard
