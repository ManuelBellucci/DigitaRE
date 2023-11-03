const HeroContent = ({ title, gradientPhrase, title2, subtitle }) => {
  return (
    <div className='w-full h-[90vh] flex flex-col items-center justify-center'>
      <div className='max-w-[675px] flex flex-col gap-16'>
        <h1 className='text-5xl md:text-6xl lg:text-[64px] font-medium'>
          {title}
          <span className='block font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FD7828] to-[#FA484F]'>
            {gradientPhrase}
          </span>
          {title2}
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-justify'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
export default HeroContent
