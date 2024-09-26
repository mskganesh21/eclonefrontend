import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  Button,
  MenuButton,
  MenuList,
  Link,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  useBreakpointValue,
} from '@chakra-ui/react'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isSearchOpen, onToggle: onSearchToggle } = useDisclosure()

  const isMobile = useBreakpointValue({ base: true, md: false })

  const { handleLogout } = useContext(AuthContext)

  const handleLogoutClick = () => {
    handleLogout()
  }

  return (
    <Flex
      as="nav"
      direction="row"
      justify="space-between"
      align="center"
      p="0 20px 20px 20px"
      gap="20px"
    >
      {isMobile && (
        <Button colorScheme="blue" onClick={onOpen}>
          <GiHamburgerMenu />
        </Button>
      )}

      <Box>
        <RouterLink to="/">
          <Heading as="h1">SHOP.CO</Heading>
        </RouterLink>
      </Box>

      {!isMobile && (
        <>
          <Flex flexShrink="0" gap="20px" align="center">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categories
              </MenuButton>
              <MenuList>
                <MenuItem>Electronics</MenuItem>
                <MenuItem>Fashion</MenuItem>
                <MenuItem>Beauty</MenuItem>
              </MenuList>
            </Menu>
            <Link>OnSale</Link>
            <Link>New Arrivals</Link>
            <Link>Brands</Link>
          </Flex>

          <Box p="40px" flexGrow="1" flexShrink="0">
            <InputGroup>
              <InputLeftElement>
                <CiSearch />
              </InputLeftElement>
              <Input
                borderRadius="20px"
                type="text"
                variant="filled"
                placeholder="Search For Products"
              />
            </InputGroup>
          </Box>
        </>
      )}

      <Flex gap="20px" align="center" direction="row">
        {isMobile && (
          <Box position="relative">
            <Popover
              isOpen={isSearchOpen}
              onClose={onSearchToggle}
              placement="bottom-end"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Box onClick={onSearchToggle} cursor="pointer">
                  <FaSearch size={20} />
                </Box>
              </PopoverTrigger>
              <PopoverContent width="100%">
                <PopoverArrow />
                <Input type="text" placeholder="Search For Products" />
              </PopoverContent>
            </Popover>
          </Box>
        )}
        <RouterLink to="/cart">
          <MdOutlineShoppingCart size={20} />
        </RouterLink>
        <Menu>
          <MenuButton as={Button}>
            <RxAvatar size={20} />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem as={Button} onClick={handleLogoutClick}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {isMobile && (
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap="10px">
                <Button>Categories</Button>
                <Button>OnSale</Button>
                <Button>New Arrivals</Button>
                <Button>Brands</Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  )
}

export default NavBar
