/* eslint-disable react/jsx-pascal-case */
import CTA from '../../commons/CTA'

const AdminPanel = ({ handleLogout, openPostListModal }) => {
  return (
    <>
      <h1>ADMIN PANEL</h1>
      <div className='flex flex-col gap-4'>
        <CTA text='List of posts' onClick={openPostListModal} />
        <CTA text='Create post' />
      </div>
      <button
        onClick={handleLogout}
        className='border border-black p-1 rounded bg-primary text-tag font-bold mt-4'
      >
        Logout
      </button>
    </>
  )
}

export default AdminPanel
