import ReviewsContainer from './utils/containers/ReviewsContainer'
import Card from './utils/cards/Card'
import data from '../../../data/reviews.json'
import { Slide } from 'react-awesome-reveal'

const Reviews = () => {
  const { title } = data
  const { first, second, third, fourth } = data
  return (
    <ReviewsContainer>
      <Slide direction='right' triggerOnce>
        <div className='flex flex-col w-full items-center gap-14 shrink-0'>
          <h3 className='flex-1 text-xl font-bold  self-start'>{title}</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start self-stretch'>
            <Card
              author={first.author}
              business={first.business}
              content={first.content}
              profilePicSrc={first.profilePicSrc}
            />
            <Card
              author={second.author}
              business={second.business}
              content={second.content}
              profilePicSrc={second.profilePicSrc}
            />
            <Card
              author={third.author}
              business={third.business}
              content={third.content}
              profilePicSrc={third.profilePicSrc}
            />
            <Card
              author={fourth.author}
              business={fourth.business}
              content={fourth.content}
              profilePicSrc={fourth.profilePicSrc}
            />
          </div>
        </div>
      </Slide>
    </ReviewsContainer>
  )
}

export default Reviews
