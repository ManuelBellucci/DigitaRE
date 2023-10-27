import Readmore from './Readmore'
import Tag from './Tag'
const CardWithoutImage = ({ tagText, title, href }) => {
  return (
    <div className='flex flex-col items-start gap-5 p-6 border border-white rounded w-full hover:bg-myGray transition-all ease-in hover:text-black group '>
      <Tag tagText={tagText} />
      <h3 className='text-2xl font-bold'>{title}</h3>
      <Readmore href={href} />
    </div>
  )
}

export default CardWithoutImage
