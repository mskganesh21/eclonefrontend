// import Layout from './Layout/Layout'
// import HomePage from './pages/HomePage/HomePage'
// import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
// import Category from './pages/Category/Category'
// import Cart from './pages/Cart/Cart'
// import Login from './pages/authentication/Login'
// import Signup from './pages/authentication/Signup'
// import { Route, Routes } from 'react-router-dom'
// import RequireAuth from './pages/authentication/RequireAuth'
// import { ChakraProvider } from '@chakra-ui/react'

// function App() {
//   return (
//     <ChakraProvider>
//       <Layout>
//         <Routes>
//           <Route element={<RequireAuth />}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/product/:id" element={<ProductDetailPage />} />
//             <Route path="/category/:id" element={<Category />} />
//             <Route path="/cart" element={<Cart />} />
//           </Route>
//           <Route path="/" element={<Login />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Layout>
//     </ChakraProvider>
//   )
// }

// export default App

import Layout from './Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import Category from './pages/Category/Category'
import Cart from './pages/Cart/Cart'
import Login from './pages/authentication/Login'
import Signup from './pages/authentication/Signup'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './pages/authentication/RequireAuth'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private routes */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App
