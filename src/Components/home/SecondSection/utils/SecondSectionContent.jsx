const SecondSectionContent = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-2 md:gap-4 lg:gap-5'>
      <h2 className='self-stretch text-lg md:text-xl lg:text-2xl font-bold'>{title}</h2>
      <p className='text-myGray text-xs md:text-base lg:text-lg text-justify'>{description}</p>
    </div>
  )
}

export default SecondSectionContent
