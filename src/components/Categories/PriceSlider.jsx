import { useState } from 'react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Text,
} from '@chakra-ui/react'

const PriceSlider = () => {
  const [sliderValues, setSliderValues] = useState([0, 100])

  const handleChange = (newValues) => {
    setSliderValues(newValues)
  }

  return (
    <Box position="relative" paddingTop="20px" paddingBottom="20px">
      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={[0, 100]}
        onChange={handleChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Text
        position="absolute"
        bottom="-20px"
        left={`calc(${sliderValues[0]}% - 10px)`}
      >
        ${sliderValues[0]}
      </Text>
      <Text
        position="absolute"
        bottom="-20px"
        right={`calc(${100 - sliderValues[1]}% - 10px)`}
      >
        ${sliderValues[1]}
      </Text>
    </Box>
  )
}

export default PriceSlider
