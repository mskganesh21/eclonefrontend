// import { useContext } from 'react'
// import AuthContext from '../../context/AuthContext'
// import { Outlet, Navigate, useLocation } from 'react-router-dom'

// const RequireAuth = () => {
//   const { auth } = useContext(AuthContext)
//   const location = useLocation()
//   return auth ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   )
// }

// export default RequireAuth

// import { useContext } from 'react'
// import AuthContext from '../../context/AuthContext'
// import { Outlet, Navigate, useLocation } from 'react-router-dom'

// const RequireAuth = () => {
//   const { auth } = useContext(AuthContext)
//   const location = useLocation()

//   if (!auth) {
//     // If the user is not authenticated and the path is `/`, redirect to login
//     if (location.pathname === '/') {
//       return <Navigate to="/login" state={{ from: location }} replace />
//     }
//   }

//   return auth ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   )
// }

// export default RequireAuth

import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const RequireAuth = () => {
  const { auth } = useContext(AuthContext)

  return auth ? <Outlet /> : <Navigate to="/login" replace />
}

export default RequireAuth
