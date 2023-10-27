const FirstSectionHeader = ({ title, description }) => {
  return (
    <div className='flex flex-col items-start gap-6 self-stretch'>
      <h2 className='self-stretch text-center text-[40px] font-bold'>
        {title}
      </h2>
      <p className='flex-1 text-[rgba(231,231,231,0.6)] text-center'>
        {description}
      </p>
    </div>
  )
}
export default FirstSectionHeader
