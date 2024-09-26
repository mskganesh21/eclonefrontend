import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import NewsLetter from './NewsLetter'
import CompleteFooterGrid from './CompleteFooterGrid'
import FooterLastPart from './FooterLastPart'

const Footer = () => {
  const innerSmallRef = useRef(null)
  const innerBigRef = useRef(null)

  useEffect(() => {
    const setPadding = () => {
      if (innerSmallRef.current && innerBigRef.current) {
        const innerSmallHeight = innerSmallRef.current.offsetHeight
        innerBigRef.current.style.paddingTop = `${innerSmallHeight / 2}px`
      }
    }

    // Run on load
    setPadding()

    // Run on resize
    window.addEventListener('resize', setPadding)

    // Cleanup
    return () => window.removeEventListener('resize', setPadding)
  }, [])

  return (
    <Box pos="relative" mt="200px">
      <Box
        w="90%"
        pos="absolute"
        left="5%"
        right="5%"
        zIndex="1"
        transform={'translateY(-50%)'}
        ref={innerSmallRef}
        className="footer__innersmall"
      >
        <NewsLetter />
      </Box>
      <Box
        bg="yellow"
        pos="relative"
        ref={innerBigRef}
        className="footer__innerbig"
      >
        <CompleteFooterGrid />
        <FooterLastPart />
      </Box>
    </Box>
  )
}

export default Footer
