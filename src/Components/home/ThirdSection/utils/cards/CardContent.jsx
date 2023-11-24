// imports
import Tag from './Tag'
import Readmore from './Readmore'
import CardTitle from './CardTitle'

const CardContent = ({ tagText, title, href }) => (
  <div className='flex flex-col items-start gap-2 md:gap-3 lg:gap-5 py-3 lg:py-6'>
    <Tag
      tagText={tagText}
    />
    <CardTitle title={title} />
    <Readmore
      href={href}
    />
  </div>
)

export default CardContent
