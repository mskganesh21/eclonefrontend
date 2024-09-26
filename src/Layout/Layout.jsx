import { Box } from '@chakra-ui/react'
import Navbar from '../components/UI/Navbar'
import SignUpHeader from '../components/HomePage/SignUpHeader'
import Footer from '../components/Footer/Footer'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box>
      <SignUpHeader />
      <Navbar />
      <BreadCrumbs />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default Layout
