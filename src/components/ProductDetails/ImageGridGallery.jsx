import { Grid, Image, useBreakpointValue } from '@chakra-ui/react'

const ImageGridGallery = () => {
  const templateColumns = useBreakpointValue({
    base: 'repeat(3, 1fr)',
    md: 'repeat(4, 1fr)',
  })
  const templateRows = useBreakpointValue({
    base: 'repeat(4, auto)',
    md: 'repeat(3, 1fr)',
  })
  const templateAreas = useBreakpointValue({
    base: `
      "big big big"
      "big big big"
      "big big big"
      "small1 small2 small3"
    `,
    md: 'unset',
  })

  return (
    <Grid
      templateColumns={templateColumns}
      templateRows={templateRows}
      templateAreas={templateAreas}
      gap={2}
      height="30%"
      width="30%"
    >
      <Image
        src="https://picsum.photos/id/237/200/300"
        alt="Product 1"
        objectFit="cover"
        w="100%"
        h="100%"
        gridArea={{ base: 'small1', md: 'unset' }}
        gridColumn={{ md: '1' }}
        gridRow={{ md: '1' }}
      />
      <Image
        src="https://picsum.photos/id/238/200/300"
        alt="Product 2"
        objectFit="cover"
        w="100%"
        h="100%"
        gridArea={{ base: 'small2', md: 'unset' }}
        gridColumn={{ md: '1' }}
        gridRow={{ md: '2' }}
      />
      <Image
        src="https://picsum.photos/id/239/200/300"
        alt="Product 3"
        objectFit="cover"
        w="100%"
        h="100%"
        gridArea={{ base: 'small3', md: 'unset' }}
        gridColumn={{ md: '1' }}
        gridRow={{ md: '3' }}
      />
      <Image
        src="https://picsum.photos/id/240/600/900"
        alt="Product 4"
        objectFit="cover"
        w="100%"
        h="100%"
        gridArea={{ base: 'big', md: 'unset' }}
        gridColumn={{ md: '2 / span 3' }}
        gridRow={{ md: '1 / span 3' }}
      />
    </Grid>
  )
}

export default ImageGridGallery
