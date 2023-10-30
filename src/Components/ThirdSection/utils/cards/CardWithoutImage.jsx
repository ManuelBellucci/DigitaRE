import Readmore from './Readmore'
import Tag from './Tag'

const CardWithoutImage = ({ tagText, title, href }) => {
  return (
    <div className='flex flex-col items-start gap-2 md:gap-4 lg:gap-5 p-4 md:p-6 lg:p-9 border border-white rounded w-full hover:bg-myGray transition-all ease-in hover:text-black group '>
      <Tag tagText={tagText} />
      <h3 className='text-base md:text-xl lg:text-2xl font-bold'>{title}</h3>
      <Readmore href={href} />
    </div>
  )
}

export default CardWithoutImage
