import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.post('/user/refresh', {
      withCredentials: true,
    })

    console.log(response.data.data.accessToken, 'refresh')
    setAuth(response.data.data.accessToken)

    return response.data.data.accessToken
  }

  return refresh
}

export default useRefreshToken
