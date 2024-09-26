import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from '@chakra-ui/react'

const AccordianComponent = ({ heading, children }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <Heading>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {heading}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordianComponent
