import CTAButton from '../commons/CTAButton'
import SecondSectionContent from './utils/SecondSectionContent'
import data from '../../data/secondsection.json'
import { Slide } from 'react-awesome-reveal'
const SecondSection = () => {
  return (
    <section className='bg-black w-full h-min grid grid-cols-2'>
      <div className='flex self-center justify-center h-[800px] lg:h-full'>
        <Slide triggerOnce>
          <img
            src={data.image.src}
            alt={data.image.alt}
            className='h-full object-contain'
          />
        </Slide>
      </div>
      <Slide triggerOnce direction='right' className='flex self-center justify-center'>
        <div className='flex flex-col self-center lg:w-[70%] items-start gap-8 md:gap-8 lg:gap-9 px-6 md:px-0'>
          <SecondSectionContent
            title={data.title}
            description={data.description}
          />
          <CTAButton
            href={data.button.href}
            text={data.button.text}
          />
        </div>
      </Slide>
    </section>
  )
}

export default SecondSection
