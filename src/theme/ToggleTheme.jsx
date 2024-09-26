import { useColorMode, Button } from '@chakra-ui/react'

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}

export default ToggleTheme
