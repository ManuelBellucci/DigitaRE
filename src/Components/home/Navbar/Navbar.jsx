// imports
import Hamburger from './utils/Hamburger'
import Logo from './utils/Logo'
import NavLinks from './utils/NavLinks'

const Nav = ({ isBlogRoute, isContactRoute }) => (
  <nav className='pt-4'>
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <Logo />
      <Hamburger />
      <div
        className='hidden w-full md:block md:w-auto'
        id='navbar-default'
      >
        <NavLinks
          blogPath='/blog'
          contactPath='/contatti'
          isBlogRoute={isBlogRoute}
          isContactRoute={isContactRoute}
        />
      </div>
    </div>
  </nav>
)

export default Nav
