import { Link } from 'react-router-dom'
import CTAButton from '../../../commons/CTAButton'

const NavLinks = ({ blogPath, isBlogRoute }) => {
  return (
    <>
      <ul className='font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0'>
        <li>
          <Link
            to={isBlogRoute ? '/' : blogPath}
            className='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary transition-all ease-in md:p-0'
          >
            {isBlogRoute ? 'Home' : 'Blog'}
          </Link>
        </li>
        <li>
          <CTAButton href={isBlogRoute ? '#contatti' : '/contatti'} text='CONTATTI' />
        </li>
      </ul>
    </>
  )
}

export default NavLinks
