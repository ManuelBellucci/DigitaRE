import Hero from './Components/Hero/Hero.jsx'
import FirstSection from './Components/FirstSection/FirstSection'
import SecondSection from './Components/SecondSection/SecondSection'
import ThirdSection from './Components/ThirdSection/ThirdSection'
import Reviews from './Components/Reviews/Reviews'
import { Fade } from 'react-awesome-reveal'

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
    </>
  )
}

export default App
