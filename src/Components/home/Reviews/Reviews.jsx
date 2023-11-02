import React, { useState, useEffect } from 'react'
import ReviewsContainer from './utils/containers/ReviewsContainer'
import Card from './utils/cards/Card'
import data from '../../../data/reviews.json'
import { Slide } from 'react-awesome-reveal'

const Reviews = () => {
  const { title } = data
  const { first, second, third, fourth } = data
  const reviews = [first, second, third, fourth]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment currentIndex, and loop back to 0 if it exceeds the length
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(intervalId)
    }
  }, [currentIndex, reviews.length])

  return (
    <ReviewsContainer>
      <Slide direction='right' triggerOnce>
        <div className='flex flex-col w-full items-center gap-14 shrink-0'>
          <h3 className='flex-1 text-xl font-bold self-start'>{title}</h3>
          <Card
            author={reviews[currentIndex].author}
            business={reviews[currentIndex].business}
            content={reviews[currentIndex].content}
            profilePicSrc={reviews[currentIndex].profilePicSrc}
          />
        </div>
      </Slide>
    </ReviewsContainer>
  )
}

export default Reviews
