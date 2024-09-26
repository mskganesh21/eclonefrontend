import { axiosPrivate } from '../api/axios'
import { useEffect } from 'react'
import useAuth from './useAuth'
import useRefreshToken from './useRefreshToken'

const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          console.log('401 error detected. Attempting to refresh token...')
          prevRequest.sent = true
          try {
            const newAccessToken = await refresh()
            console.log('Token refreshed successfully.')
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
            console.log('Retrying the request with the new token...')
            return axiosPrivate(prevRequest)
          } catch (refreshError) {
            console.error('Token refresh failed:', refreshError)
            return Promise.reject(refreshError)
          }
        }
        console.error('Request failed:', error)
        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [auth, refresh])

  return axiosPrivate
}

export default useAxiosPrivate
