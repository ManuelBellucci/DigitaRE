import CTAButton from '../commons/CTAButton'
import CardWithImage from './utils/cards/CardWithImage'
import CardWithoutImage from './utils/cards/CardWithoutImage'
import SubsectionsContainer from './utils/containers/SubsectionsContainer'
import ThirdSectionContainer from './utils/containers/ThirdSectionContainer'
import data from '../../data/thirdsection.json'
import { Slide, Zoom } from 'react-awesome-reveal'

const ThirdSection = () => {
  const { title, description, button, cards } = data
  const { href, text } = button
  const { withImage, withoutImage } = cards
  const { first, second } = withImage
  const { first: firstWithoutImage, second: secondWithoutImage, third: thirdWithoutImage, fourth: fourthWithoutImage } = withoutImage

  return (
    <ThirdSectionContainer>
      <Slide triggerOnce>
        <SubsectionsContainer>
          <div className='flex flex-col w-full sm:w-[25%] items-start gap-6 md:gap-9 lg:gap-10 shrink-0'>
            <div className='self-stretch text-3xl md:text-4xl lg:text-5xl font-bold'>{title}</div>
            <div className='text-myGray text-sm md:text-md lg:text-lg text-justify'>{description}</div>
            <CTAButton href={href} text={text} />
          </div>
          <Zoom triggerOnce cascade>
            <div className='flex flex-col gap-2 md:gap-5 lg:gap-8 flex-1'>
              <CardWithImage
                tagText={first.tagText}
                title={first.title}
                src={first.src}
                href={first.href}
              />
              <CardWithoutImage
                tagText={firstWithoutImage.tagText}
                title={firstWithoutImage.title}
                href={firstWithoutImage.href}
              />
              <CardWithoutImage
                tagText={secondWithoutImage.tagText}
                title={secondWithoutImage.title}
                href={secondWithoutImage.href}
              />
            </div>
            <div className='flex flex-col w-full items-center gap-2 md:gap-5 lg:gap-8 flex-1'>
              <CardWithoutImage
                tagText={thirdWithoutImage.tagText}
                title={thirdWithoutImage.title}
                href={thirdWithoutImage.href}
              />
              <CardWithImage
                tagText={second.tagText}
                title={second.title}
                src={second.src}
                href={second.href}
              />
              <CardWithoutImage
                tagText={fourthWithoutImage.tagText}
                title={fourthWithoutImage.title}
                href={fourthWithoutImage.href}
              />
            </div>
          </Zoom>
        </SubsectionsContainer>
      </Slide>
    </ThirdSectionContainer>
  )
}

export default ThirdSection
