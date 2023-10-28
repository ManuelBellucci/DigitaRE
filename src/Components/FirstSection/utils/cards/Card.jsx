const Card = ({ svg, title, description, alt }) => {
  return (
    <div className=' flex flex-col items-start gap-3 flex-1 self-stretch p-5 border border-white rounded-[10px]'>
      <img
        src={svg}
        alt={alt}
        className='max-h-12'
      />
      <h3 className='text-lg md:text-xl self-stretch font-bold'>
        {title}
      </h3>
      <div className='text-myGray text-sm self-stretch'>
        {description}
      </div>
    </div>
  )
}
export default Card
