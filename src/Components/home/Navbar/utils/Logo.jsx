const Logo = () => {
  return (
    <a
      href='/'
      className='flex items-center'
    >
      <img
        loading='lazy'
        className='h-8 mr-3'
        alt='Logo'
        src='./assets/logo.svg'
      />
      <span className='self-center text-xl md:text-2xl lg:text-3xl font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FD7828] to-[#FA484F] transition-all ease-in'>
        DigitaRE
      </span>
    </a>
  )
}
export default Logo
