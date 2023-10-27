import CardContainer from './utils/CardContainer'
import Card from './utils/Card'
import FirstSectionContainer from './utils/FirstSectionContainer'
import FirstSectionHeader from './utils/FirstSectionHeader'
import data from '../../data/firstsection.json'

const FirstSection = () => {
  return (
    <section className='bg-[#110F0F] flex w-full px-[70px] pt-20 pb-[70px] justify-center items-center'>
      <FirstSectionContainer>
        <FirstSectionHeader
          title={data.header.title}
          description={data.header.description}
        />
        <CardContainer>
          <Card
            alt={data.cards.first.alt}
            svg={data.cards.first.svg}
            title={data.cards.first.title}
            description={data.cards.first.description}
          />
          <Card
            alt={data.cards.second.alt}
            svg={data.cards.second.svg}
            title={data.cards.second.title}
            description={data.cards.second.description}
          />
          <Card
            alt={data.cards.third.alt}
            svg={data.cards.third.svg}
            title={data.cards.third.title}
            description={data.cards.third.description}
          />
        </CardContainer>
        <CardContainer>
          <Card
            alt={data.cards.fourth.alt}
            svg={data.cards.fourth.svg}
            title={data.cards.fourth.title}
            description={data.cards.fourth.description}
          />
          <Card
            alt={data.cards.fifth.alt}
            svg={data.cards.fifth.svg}
            title={data.cards.fifth.title}
            description={data.cards.fifth.description}
          />
          <Card
            alt={data.cards.sixth.alt}
            svg={data.cards.sixth.svg}
            title={data.cards.sixth.title}
            description={data.cards.sixth.description}
          />
        </CardContainer>
      </FirstSectionContainer>
    </section>
  )
}

export default FirstSection
