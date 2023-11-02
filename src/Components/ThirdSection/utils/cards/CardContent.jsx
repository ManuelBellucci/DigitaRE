import Tag from './Tag'
import Readmore from './Readmore'

const CardContent = ({ tagText, title, href }) => (
  <div className='flex flex-col items-start gap-2 md:gap-3 lg:gap-5 py-3 lg:py-6'>
    <Tag tagText={tagText} />
    <h3 className='text-base md:text-xl lg:text-2xl font-bold'>{title}</h3>
    <div className='flex gap-2 items-center'>
      <Readmore href={href} />
    </div>
  </div>
)

export default CardContent
