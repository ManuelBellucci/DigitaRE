// imports
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full p-4 bg-[#101010] text-white'>
      <Link
        to='/admin'
        className='inline-flex border font-bold border-primary px-6 py-[10px] rounded-md hover:bg-primary hover:text-tag transition-all ease-in'
      >
        <img src='/assets/lock.svg' height='20' width='20' alt='lock icon' className='h-4 w-4' />
      </Link>
    </footer>
  )
}
export default Footer
