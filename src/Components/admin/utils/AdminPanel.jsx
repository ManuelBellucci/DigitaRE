/* eslint-disable react/jsx-pascal-case */
import CTA from '../../commons/CTA'

const AdminPanel = ({ handleLogout, openPostListModal, openLeadListModal }) => {
  return (
    <>
      <h1 className='text-3xl'>ADMIN PANEL</h1>
      <div className='flex flex-col gap-2 mt-8'>
        <CTA className='rounded-md cursor-pointer' text='List of posts' onClick={openPostListModal} />
        <CTA className='rounded-md cursor-pointer' text='Leads' onClick={openLeadListModal} />
        <CTA className='rounded-md cursor-pointer' text='Create post' />
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
