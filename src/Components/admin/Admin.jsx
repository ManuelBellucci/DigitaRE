/* eslint-disable react/jsx-pascal-case */

// imports
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminPanel from './utils/AdminPanel'
import Login from './utils/Login'
import handleLogin from '../../functions/handleLogin'
import handleLogout from '../../functions/handleLogout'
import AdminContainer from './utils/AdminContainer'
import PostListModal from './utils/PostListModal'
import LeadListModal from './utils/LeadListModal'
import CreatePostModal from './utils/CreatePostModal'

const Admin = () => {
  // states e hooks
  const [authorized, setAuthorized] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPostListModalOpen, setPostListModalOpen] = useState(false)
  const [isLeadListModalOpen, setLeadListModalOpen] = useState(false)
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false)
  const navigate = useNavigate()

  // funzioni per gestire il login e il logout
  const handleLoginClick = () => handleLogin(username, password, setAuthorized, window.localStorage)
  const handleLogoutClick = () => handleLogout(setAuthorized, navigate)

  // funzioni per gestire l'apertura e la chiusura del modal dei post
  const openPostListModal = () => setPostListModalOpen(true)
  const closePostListModal = () => setPostListModalOpen(false)

  // funzioni per gestire l'apertura e la chiusura del modal delle lead
  const openLeadListModal = () => setLeadListModalOpen(true)
  const closeLeadListModal = () => setLeadListModalOpen(false)

  // funzioni per gestire l'apertura e la chiusura del modal per la creazione di un post
  const openCreatePostModal = () => setCreatePostModalOpen(true)
  const closeCreatePostModal = () => setCreatePostModalOpen(false)

  return (
    <AdminContainer>
      {authorized
        ? (
          <>
            <AdminPanel
              handleLogout={handleLogoutClick}
              openPostListModal={openPostListModal}
              openLeadListModal={openLeadListModal}
              openCreatePostModal={openCreatePostModal}
            />
            <PostListModal
              isOpen={isPostListModalOpen}
              onRequestClose={closePostListModal}
            />
            <LeadListModal
              isOpen={isLeadListModalOpen}
              onRequestClose={closeLeadListModal}
            />
            <CreatePostModal
              isOpen={isCreatePostModalOpen}
              onRequestClose={closeCreatePostModal}
            />
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
