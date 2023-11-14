/* eslint-disable space-unary-ops */
import CTAButton from '../../commons/CTAButton'
import CardWithImage from './utils/cards/CardWithImage'
import CardWithoutImage from './utils/cards/CardWithoutImage'
import SubsectionsContainer from './utils/containers/SubsectionsContainer'
import ThirdSectionContainer from './utils/containers/ThirdSectionContainer'
import data from '../../../data/thirdsection.json'
import { Slide, Zoom } from 'react-awesome-reveal'
import React, { useEffect, useState } from 'react'

const ThirdSection = () => {
  const { title, description, button } = data
  const { href, text } = button
  const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts?isFeatured=true')
        if (!response.ok) {
          throw new Error('Errore nel recupero dei post')
        }
        const data = await response.json()
        setFeaturedPosts(data)
      } catch (error) {
        console.error('Errore durante il recupero dei post:', error)
      }
    }

    fetchFeaturedPosts()
  }, [])

  const renderCard = (post, index) => {
    const props = {
      tagText: post.tag,
      title: post.title,
      href: `/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`
    }

    if (index === 0 || index === 4) {
      return <CardWithImage {...props} src={post.cover} alt='cover image' />
    }

    return <CardWithoutImage {...props} />
  }

  return (
    <ThirdSectionContainer>
      <Slide triggerOnce>
        <SubsectionsContainer>
          <div className='flex flex-col w-full sm:w-[25%] items-start gap-6 md:gap-9 lg:gap-10 shrink-0'>
            <div className='self-stretch text-3xl md:text-4xl lg:text-5xl font-bold'>
              {title}
            </div>
            <div className='text-myGray text-sm md:text-base lg:text-lg text-justify'>
              {description}
            </div>
            <CTAButton
              href={href}
              text={text}
              className='text-base md:text-lg lg:text-xl'
            />
          </div>
          <Zoom triggerOnce cascade>
            <div className='flex flex-col gap-2 md:gap-5 lg:gap-8 flex-1'>
              {featuredPosts
                .slice(0, 3)
                .map((post, index) => (
                  <React.Fragment key={post._id}>
                    {renderCard(post, index)}
                  </React.Fragment>
                ))}
            </div>
            <div className='flex flex-col w-full items-center gap-2 md:gap-5 lg:gap-8 flex-1'>
              {featuredPosts
                .slice(3, 6)
                .map((post, index) => (
                  <React.Fragment key={post._id}>
                    {renderCard(post, index + 3)}
                  </React.Fragment>
                ))}
            </div>
          </Zoom>
        </SubsectionsContainer>
      </Slide>
    </ThirdSectionContainer>
  )
}

export default ThirdSection
