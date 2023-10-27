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
            title='title'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png'
          />
          <CardWithoutImage
            tagText={data.cards.withoutImage.first.tagText}
            title='title'
          />
          <CardWithoutImage
            tagText={data.cards.withoutImage.second.tagText}
            title='title'
          />
        </div>
        <div className='flex flex-col items-center gap-8 flex-1'>
          <CardWithoutImage
            tagText={data.cards.withoutImage.third.tagText}
            title='title'
          />
          <CardWithImage
            tagText={data.cards.withImage.second.tagText}
            title='title'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png'
          />
          <CardWithoutImage
            tagText={data.cards.withoutImage.fourth.tagText}
            title='title'
          />
        </div>
      </SubsectionsContainer>
    </ThirdSectionContainer>
  )
}

export default ThirdSection
