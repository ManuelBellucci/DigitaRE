const HeroContent = ({ title, gradientPhrase, title2, subtitle }) => {
  return (
    <div className='w-full h-[90vh] flex flex-col items-center justify-center'>
      <div className='max-w-[675px] flex flex-col gap-16 sm:gap-6 lg:gap-14'>
        <h1 className='text-5xl lg:text-6xl font-medium'>
          {title}
          <span className='block font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FD7828] to-[#FA484F]'>
            {gradientPhrase}
          </span>
          {title2}
        </h1>
        <p className='text-base text-justify'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
export default HeroContent
