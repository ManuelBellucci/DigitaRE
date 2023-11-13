import Hero from './Components/home/Hero/Hero'
import FirstSection from './Components/home/FirstSection/FirstSection'
import SecondSection from './Components/home/SecondSection/SecondSection'
import ThirdSection from './Components/home/ThirdSection/ThirdSection'
import Reviews from './Components/home/Reviews/Reviews'
import { Fade } from 'react-awesome-reveal'
import { FloatButton } from 'antd'
import Contact from './Components/home/Contact/Contact'
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
      <Fade triggerOnce>
        <Contact />
      </Fade>
      <FloatButton.BackTop className='hover:bg-myGray' />
    </>
  )
}

export default App
