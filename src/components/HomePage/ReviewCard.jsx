import { Stack, Heading, Text, Card, CardBody } from '@chakra-ui/react'
import ReactStars from 'react-rating-stars-component'

const ReviewCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack>
          <ReactStars
            count={5}
            activeColor="#ffd700"
            color="white"
            isHalf={true}
            value={3.5}
            size={24}
            edit={false}
          />
          <Heading>Sarah.M</Heading>
          <Text>
            "I'm blown away by the quality and style of the clothes I recieved
            from Shop.co. From casual wear to elegant dresses,every piece I've
            bought has exceeded my expectations."
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ReviewCard
