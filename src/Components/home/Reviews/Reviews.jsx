import React, { useState } from 'react'
import ReviewsContainer from './utils/containers/ReviewsContainer'
import CarouselControls from './utils/carousel/CarouselControls'
import ReviewCard from './utils/cards/ReviewCard'
import data from '../../../data/reviews.json'

const Reviews = () => {
  const { first, second, third, fourth } = data
  const reviews = [first, second, third, fourth]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  return (
    <div id='controls-carousel' className='relative w-full' data-carousel='static'>
      <ReviewsContainer>
        <ReviewCard review={reviews[currentIndex]} />
      </ReviewsContainer>
      <CarouselControls
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
      />
    </div>
  )
}

export default Reviews
