import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import CompanyFooter from './CompanyFooter'
import FooterLinkGrid from './FooterLinkGrid'

const CompleteFooterGrid = () => {
  const direction = useBreakpointValue({ base: 'column', md: 'row' })
  const logoWidth = useBreakpointValue({ base: '100%', md: '20%' })
  const gridWidth = useBreakpointValue({ base: '100%', md: '80%' })

  return (
    // p={6}
    <Box as="footer">
      <Flex direction={direction} gap={8}>
        <Box width={logoWidth}>
          <CompanyFooter />
        </Box>
        <Box width={gridWidth}>
          <FooterLinkGrid />
        </Box>
      </Flex>
    </Box>
  )
}

export default CompleteFooterGrid
