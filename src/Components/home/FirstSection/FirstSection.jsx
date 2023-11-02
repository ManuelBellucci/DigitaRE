import CardContainer from './utils/cards/CardContainer'
import Card from './utils/cards/Card'
import FirstSectionContainer from './utils/containers/FirstSectionContainer'
import FirstSectionHeader from './utils/FirstSectionHeader'
import data from '../../../data/firstsection.json'
import { Slide } from 'react-awesome-reveal'

const FirstSection = () => {
  const { title, description } = data.header
  const { first, second, third, fourth, fifth, sixth } = data.cards

  const cardData = [first, second, third]
  const cardData2 = [fourth, fifth, sixth]

  return (
    <section className='bg-[#110F0F] flex w-full px-10 lg:px-[70px] pt-20 pb-[70px] justify-center items-center'>
      <Slide direction='left' triggerOnce>
        <FirstSectionContainer>
          <FirstSectionHeader
            title={title}
            description={description}
          />
          <CardContainer>
            {cardData.map((card, index) => (
              <Card
                key={index}
                alt={card.alt}
                svg={card.svg}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
          <CardContainer>
            {cardData2.map((card, index) => (
              <Card
                key={index}
                alt={card.alt}
                svg={card.svg}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
        </FirstSectionContainer>
      </Slide>
    </section>
  )
}

export default FirstSection
