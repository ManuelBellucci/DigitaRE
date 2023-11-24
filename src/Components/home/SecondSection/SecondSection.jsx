// imports
import SecondSectionContentWrapper from './utils/SecondSectionContentWrapper'
import SecondSectionImage from './utils/SecondSectionImage'
import data from '../../../data/secondsection.json'
import { Slide } from 'react-awesome-reveal'

const SecondSection = () => (
  <section className='bg-black w-full h-min grid grid-rows-1 lg:grid-cols-2 overflow-hidden'>
    <SecondSectionImage />
    <Slide triggerOnce direction='right' className='flex self-center'>
      <SecondSectionContentWrapper
        title={data.title}
        description={data.description}
        button={data.button}
      />
    </Slide>
  </section>
)

export default SecondSection
