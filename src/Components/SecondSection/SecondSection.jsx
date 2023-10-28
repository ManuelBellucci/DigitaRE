import CTAButton from '../commons/CTAButton'
import SecondSectionContent from './utils/SecondSectionContent'
import data from '../../data/secondsection.json'

const SecondSection = () => {
  return (
    <section className='bg-black w-full h-min grid grid-cols-2'>
      <div className='flex self-center justify-center h-[600px] lg:h-full'>
        <img
          src={data.image.src}
          alt={data.image.alt}
          className='h-full object-contain'
        />
      </div>
      <div className='flex flex-col self-center lg:w-[70%] items-start gap-4 md:gap-6 lg:gap-8 px-6 md:px-0'>
        <SecondSectionContent
          title={data.title}
          description={data.description}
        />
        <CTAButton
          href={data.button.href}
          text={data.button.text}
        />
      </div>
    </section>
  )
}

export default SecondSection
