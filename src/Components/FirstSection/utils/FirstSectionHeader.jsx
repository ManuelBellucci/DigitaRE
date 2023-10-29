const FirstSectionHeader = ({ title, description }) => {
  return (
    <div className='flex flex-col items-start gap-6 self-stretch'>
      <h2 className='self-stretch text-center text-3xl lg:text-[40px] font-bold'>
        {title}
      </h2>
      <p className='flex-1 text-myGray text-center'>
        {description}
      </p>
    </div>
  )
}
export default FirstSectionHeader
