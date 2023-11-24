import axios from 'axios'

const handleLogin = async (username, password, setAuthorized, localStorage) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', { username, password })

    if (response.data.success) {
      localStorage.setItem('token', response.data.token)
      setAuthorized(true)
    } else {
      window.alert(response.data.message)
    }
  } catch (error) {
    console.error('Error during login:', error)
  }
}

export default handleLogin
