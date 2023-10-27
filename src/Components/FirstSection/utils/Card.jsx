const Card = ({ svg, title, description, alt }) => {
  return (
    <div className=' flex flex-col items-start gap-3 flex-1 self-stretch p-5 border border-white rounded-[10px]'>
      <img
        src={svg}
        alt={alt}
      />
      <h3 className='text-3xl self-stretch font-bold'>
        {title}
      </h3>
      <div className='color-[rgba(255, 255, 255, 0.60)] text-sm self-stretch'>
        {description}
      </div>
    </div>
  )
}
export default Card
