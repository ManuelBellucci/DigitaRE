import ImageContainer from './ImageContainer'
import CardContent from './CardContent'

const CardWithImage = ({ tagText, title, src, href }) => {
  return (
    <div className='flex flex-col p-4 md:p-6 lg:p-9 items-start gap-2 md:gap-4 lg:gap-6 border border-white rounded w-full hover:bg-myGray transition-all ease-in hover:text-black group'>
      <ImageContainer src={src} />
      <CardContent tagText={tagText} title={title} href={href} />
    </div>
  )
}

export default CardWithImage
