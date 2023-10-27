import CTAButton from '../commons/CTAButton'
import SecondSectionContent from './utils/SecondSectionContent'
import data from '../../data/secondsection.json'

const SecondSection = () => {
  return (
    <section className='bg-black w-full h-[596px] shrink-0 grid grid-cols-2'>
      <div className='flex self-center justify-center'>
        <img
          src={data.image.src}
          alt={data.image.alt}
        />
      </div>
      <div className='flex flex-col self-center w-[523px] items-start gap-8'>
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
