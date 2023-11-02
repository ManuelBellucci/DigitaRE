const Logo = () => {
  return (
    <a href='/' className='flex items-center'>
      <img
        loading='lazy'
        className='h-8 mr-3'
        alt='Logo'
        src='./assets/logo.svg'
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap hover:text-primary transition-all ease-in'>
        DigitaRE
      </span>
    </a>
  )
}
export default Logo
