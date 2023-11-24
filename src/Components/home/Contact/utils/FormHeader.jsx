const FormHeader = ({ title, subtitle }) => (
  <>
    <div className='self-center text-3xl md:text-4xl lg:text-5xl font-bold'>
      {title}
    </div>

    <div className='text-myGray text-sm md:text-base lg:text-lg text-justify'>
      {subtitle}
    </div>
  </>
)

export default FormHeader
