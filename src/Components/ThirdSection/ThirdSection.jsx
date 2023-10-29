import CTAButton from '../commons/CTAButton'
import CardWithImage from './utils/cards/CardWithImage'
import CardWithoutImage from './utils/cards/CardWithoutImage'
import SubsectionsContainer from './utils/containers/SubsectionsContainer'
import ThirdSectionContainer from './utils/containers/ThirdSectionContainer'
import data from '../../data/thirdsection.json'
import { Slide, Zoom } from 'react-awesome-reveal'

const ThirdSection = () => {
  return (
    <ThirdSectionContainer>
      <Slide triggerOnce>
        <SubsectionsContainer>
          <div className='flex flex-col w-full sm:w-[25%] items-start gap-6 md:gap-9 lg:gap-10 shrink-0'>
            <div className='self-stretch text-3xl md:text-4xl lg:text-5xl font-bold'>{data.title}</div>
            <div className='flex-1 text-myGray text-sm md:text-md lg:text-lg'>{data.description}</div>
            <CTAButton href={data.button.href} text={data.button.text} />
          </div>
          <Zoom>
            <div className='flex flex-col w-full items-center gap-2 md:gap-5 lg:gap-8 flex-1'>
              <CardWithImage
                tagText={data.cards.withImage.first.tagText}
                title={data.cards.withImage.first.title}
                src={data.cards.withImage.first.src}
                href={data.cards.withImage.first.href}
              />
              <CardWithoutImage
                tagText={data.cards.withoutImage.first.tagText}
                title={data.cards.withoutImage.first.title}
                href={data.cards.withoutImage.first.href}
              />
              <CardWithoutImage
                tagText={data.cards.withoutImage.second.tagText}
                title={data.cards.withoutImage.second.title}
                href={data.cards.withoutImage.second.href}
              />
            </div>
            <div className='flex flex-col w-full items-center gap-2 md:gap-5 lg:gap-8 flex-1'>
              <CardWithoutImage
                tagText={data.cards.withoutImage.third.tagText}
                title={data.cards.withoutImage.third.title}
                href={data.cards.withoutImage.third.href}
              />
              <CardWithImage
                tagText={data.cards.withImage.second.tagText}
                title={data.cards.withImage.second.title}
                src={data.cards.withImage.second.src}
                href={data.cards.withImage.second.href}
              />
              <CardWithoutImage
                tagText={data.cards.withoutImage.fourth.tagText}
                title={data.cards.withoutImage.fourth.title}
                href={data.cards.withoutImage.fourth.href}
              />
            </div>
          </Zoom>
        </SubsectionsContainer>
      </Slide>
    </ThirdSectionContainer>
  )
}

export default ThirdSection
