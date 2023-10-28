import CTAButton from '../commons/CTAButton'
import SecondSectionContent from './utils/SecondSectionContent'
import data from '../../data/secondsection.json'

const SecondSection = () => {
  return (
    <section className='bg-black w-full h-[596px] shrink-0 grid grid-cols-1 md:grid-cols-2'>
      <div className='flex self-center justify-center'>
        <img
          src={data.image.src}
          alt={data.image.alt}
          className='max-h-72 lg:max-h-96'
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
