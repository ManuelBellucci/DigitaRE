import Card from './Card'
import data from '../../../../../data/reviews.json'
const ReviewCard = ({ review }) => {
  const { title } = data
  return (
    <div className='flex flex-col w-full items-center gap-14 shrink-0'>
      <h3 className='flex-1 text-xl md:text-2xl lg:text-3xl font-bold self-center'>
        {title}
      </h3>
      <Card
        author={review.author}
        business={review.business}
        content={review.content}
        profilePicSrc={review.profilePicSrc}
      />
    </div>
  )
}

export default ReviewCard
