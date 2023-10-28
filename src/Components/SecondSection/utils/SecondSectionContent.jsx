const SecondSectionContent = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-3 md:gap-4 lg:gap-5'>
      <h2 className='self-stretch text-4xl font-bold'>{title}</h2>
      <p className='text-myGray text-sm md:text-base'>{description}</p>
    </div>
  )
}

export default SecondSectionContent
