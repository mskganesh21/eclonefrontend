// import { createContext, useState } from 'react'

// const AuthContext = createContext({})

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null)

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthContext

import { createContext, useState } from 'react'

// Create the context
const AuthContext = createContext({})

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // Initialize auth state with token from localStorage
  const [auth, setAuthState] = useState(() => {
    const storedToken = localStorage.getItem('accessToken')
    return storedToken ? { accessToken: storedToken } : null
  })

  // Function to update auth state and localStorage
  const setAuth = (token) => {
    if (token) {
      localStorage.setItem('accessToken', token)
    } else {
      localStorage.removeItem('accessToken')
    }
    setAuthState(token ? { accessToken: token } : null)
  }

  // Function to handle logout
  const handleLogout = () => {
    setAuth(null) // Clear auth state
    localStorage.removeItem('accessToken') // Remove token from localStorage
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
