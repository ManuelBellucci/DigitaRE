/* eslint-disable react/jsx-pascal-case */

// imports
import SecondSectionContent from './SecondSectionContent'
import CTA from '../../../commons/CTA'

const SecondSectionContentWrapper = ({ title, description, button }) => (
  <div className='flex flex-col self-center lg:w-[70%] items-start gap-8 md:gap-8 lg:gap-9 px-6 py-8'>
    <SecondSectionContent title={title} description={description} />
    <CTA href={button.href} text={button.text} className='lg:self-center text-base md:text-lg lg:text-xl' />
  </div>
)

export default SecondSectionContentWrapper
