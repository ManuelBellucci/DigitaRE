import { Slide } from 'react-awesome-reveal'

const SecondSectionImage = () => (
  <div className='flex justify-center items-center h-max p-8 lg:p-0 lg:h-[600px]'>
    <Slide triggerOnce>
      <div className='bg-[url(/assets/persona.png)] bg-contain p-20 md:p-28 lg:p-52 border border-white rounded-full bg-no-repeat' />
    </Slide>
  </div>
)

export default SecondSectionImage
