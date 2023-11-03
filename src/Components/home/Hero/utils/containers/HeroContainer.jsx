const HeroContainer = ({ children }) => {
  return (
    <section
      className='px-16 pb-16 bg-[url(/assets/shaders.svg)] bg-no-repeat bg-cover bg-center'
    >
      {children}
    </section>
  )
}

export default HeroContainer
