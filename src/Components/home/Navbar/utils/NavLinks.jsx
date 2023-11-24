/* eslint-disable react/jsx-pascal-case */

// imports
import { Link } from 'react-router-dom'
import CTA from '../../../commons/CTA'
import CTAWithLink from '../../../commons/CTAWithLink'

const NavLinks = ({ blogPath, isBlogRoute }) => {
  // costante per definire se ci troviamo in /contatti per modificare i NavLinks in base alla posizione dell'utente
  const isContactRoute = window.location.pathname === '/contatti'

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
          {!isContactRoute && (
            isBlogRoute
              ? (
                <CTAWithLink href='/contatti' text='CONTATTI' />
                )
              : (
                <CTA href='#contatti' text='CONTATTI' />
                )
          )}
        </li>
      </ul>
    </>
  )
}

export default NavLinks
