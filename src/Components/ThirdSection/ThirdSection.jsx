import CTAButton from '../commons/CTAButton'
import CardWithImage from './utils/cards/CardWithImage'
import CardWithoutImage from './utils/cards/CardWithoutImage'
import SubsectionsContainer from './utils/containers/SubsectionsContainer'
import ThirdSectionContainer from './utils/containers/ThirdSectionContainer'
import data from '../../data/thirdsection.json'

const ThirdSection = () => {
  return (
    <ThirdSectionContainer>
      <SubsectionsContainer>
        <div className='flex flex-col w-[412px] items-start gap-8 shrink-0'>
          <div className='self-stretch text-4xl'>{data.title}</div>
          <div className='flex-1 text-myGray text-lg'>{data.description}</div>
          <CTAButton href={data.button.href} text={data.button.text} />
        </div>
        <div className='flex flex-col items-center gap-8 flex-1'>
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
        <div className='flex flex-col items-center gap-8 flex-1'>
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
      </SubsectionsContainer>
    </ThirdSectionContainer>
  )
}

export default ThirdSection
