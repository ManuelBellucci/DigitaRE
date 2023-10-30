import CTAButton from '../commons/CTAButton'
import SecondSectionContent from './utils/SecondSectionContent'
import data from '../../data/secondsection.json'
import { Slide } from 'react-awesome-reveal'
const SecondSection = () => {
  return (
    <section className='bg-black w-full h-min grid grid-cols-2'>
      <div className='flex justify-center items-center h-[600px] md:h-[700px]'>
        <Slide triggerOnce>
          <div className='bg-[url(/assets/persona.png)] bg-contain p-20 md:p-28 lg:p-52 border border-white rounded-full bg-no-repeat' />
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
