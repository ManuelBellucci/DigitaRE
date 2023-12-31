const FirstSectionHeader = ({ title, description }) => (
  <div className='flex flex-col items-start gap-6 self-stretch'>
    <h2 className='self-stretch text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
      {title}
    </h2>
    <p className='flex-1 text-myGray text-sm md:text-base lg:text-lg text-justify'>
      {description}
    </p>
  </div>
)

export default FirstSectionHeader
