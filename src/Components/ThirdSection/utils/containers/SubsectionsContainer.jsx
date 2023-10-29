const SubsectionsContainer = ({ children }) => {
  return (
    <div className='flex flex-col sm:flex-row w-full gap-3 md:gap-6 lg:gap-8 shrink-0'>
      {children}
    </div>
  )
}

export default SubsectionsContainer
