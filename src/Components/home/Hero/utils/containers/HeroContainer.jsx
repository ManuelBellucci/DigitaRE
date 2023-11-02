const HeroContainer = ({ children }) => {
  return (
    <section
      className='px-16 bg-[url(/assets/shaders.svg)] bg-no-repeat bg-cover'
    >
      {children}
    </section>
  )
}

export default HeroContainer
