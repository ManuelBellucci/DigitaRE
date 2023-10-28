const HeroContent = ({ title, gradientPhrase, title2, subtitle }) => {
  return (
    <div className='w-full h-[90vh] grid place-content-center gap-6'>
      <h1 className='max-w-[675px] text-6xl font-medium'>
        {title}
        <span className='block font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FD7828] to-[#FA484F]'>
          {gradientPhrase}
        </span>
        {title2}
      </h1>
      <p className='max-w-[605px] text-justify'>
        {subtitle}
      </p>
    </div>
  )
}
export default HeroContent
