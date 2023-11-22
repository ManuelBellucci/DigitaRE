const handleLogout = (setAuthorized, navigate) => {
  setAuthorized(false)
  navigate('/')
}

export default handleLogout
