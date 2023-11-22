/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminPanel from './utils/AdminPanel'
import Login from './utils/Login'
import handleLogin from './utils/handleLogin'
import handleLogout from './utils/handleLogout'
import AdminContainer from './utils/AdminContainer'
import PostListModal from './utils/PostListModal'

const Admin = () => {
  const [authorized, setAuthorized] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPostListModalOpen, setPostListModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleLoginClick = () => handleLogin(username, password, setAuthorized, window.localStorage)
  const handleLogoutClick = () => handleLogout(setAuthorized, navigate)

  const openPostListModal = () => setPostListModalOpen(true)
  const closePostListModal = () => setPostListModalOpen(false)

  return (
    <AdminContainer>
      {authorized
        ? (
          <>
            <AdminPanel handleLogout={handleLogoutClick} openPostListModal={openPostListModal} />
            <PostListModal isOpen={isPostListModalOpen} onRequestClose={closePostListModal} />
          </>
          )
        : (
          <>
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLoginClick}
            />
          </>
          )}
    </AdminContainer>
  )
}

export default Admin
