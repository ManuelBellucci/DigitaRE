const NavLinks = ({ blogPath }) => {
  return (
    <>
      <ul className='font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0'>
        <li>
          <a
            href={blogPath}
            className='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFA800] transition-all ease-in md:p-0'
          >
            Blog
          </a>
        </li>
        <li>
          <a href='#contatti' className='border border-[#FFA800] px-6 py-[10px] rounded-3xl hover:bg-[#FFA800] transition-all ease-in'>
            CONTATTI
          </a>
        </li>
      </ul>
    </>
  )
}

export default NavLinks
