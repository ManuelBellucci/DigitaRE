import Hero from './Components/home/Hero/Hero.jsx'
import FirstSection from './Components/home/FirstSection/FirstSection'
import SecondSection from './Components/home/SecondSection/SecondSection'
import ThirdSection from './Components/home/ThirdSection/ThirdSection'
import Reviews from './Components/home/Reviews/Reviews'
import { Fade } from 'react-awesome-reveal'
import { FloatButton } from 'antd'
function App () {
  return (
    <>
      <Hero />
      <Fade triggerOnce>
        <FirstSection />
      </Fade>
      <Fade triggerOnce>
        <SecondSection />
      </Fade>
      <Fade triggerOnce>
        <ThirdSection />
      </Fade>
      <Fade triggerOnce>
        <Reviews />
      </Fade>
      <FloatButton.BackTop className='hover:bg-myGray' />
    </>
  )
}

export default App
