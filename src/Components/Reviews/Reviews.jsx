import ReviewsContainer from './utils/containers/ReviewsContainer'
import Card from './utils/cards/Card'
import data from '../../data/reviews.json'
const Reviews = () => {
  return (
    <ReviewsContainer>
      <div className='flex flex-col w-full items-center gap-14 shrink-0'>
        <h3 className='flex-1 text-xl font-bold  self-start'>{data.title}</h3>
        <div className='flex gap-6 justify-center items-start self-stretch'>
          <Card
            author={data.first.author}
            business={data.first.business}
            content={data.first.content}
            profilePicSrc={data.first.profilePicSrc}
          />
          <Card
            author={data.second.author}
            business={data.second.business}
            content={data.second.content}
            profilePicSrc={data.second.profilePicSrc}
          />
          <Card
            author={data.third.author}
            business={data.third.business}
            content={data.third.content}
            profilePicSrc={data.third.profilePicSrc}
          />
          <Card
            author={data.fourth.author}
            business={data.fourth.business}
            content={data.fourth.content}
            profilePicSrc={data.fourth.profilePicSrc}
          />
        </div>
      </div>
    </ReviewsContainer>
  )
}

export default Reviews
