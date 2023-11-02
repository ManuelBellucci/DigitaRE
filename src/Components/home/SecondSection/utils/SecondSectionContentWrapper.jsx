import SecondSectionContent from './SecondSectionContent'
import CTAButton from '../../../commons/CTAButton'

const SecondSectionContentWrapper = ({ title, description, button }) => (
  <div className='flex flex-col self-center lg:w-[70%] items-start gap-8 md:gap-8 lg:gap-9 px-6 py-8'>
    <SecondSectionContent title={title} description={description} />
    <CTAButton href={button.href} text={button.text} className='lg:self-center' />
  </div>
)

export default SecondSectionContentWrapper
