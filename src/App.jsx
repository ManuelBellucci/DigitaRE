import './App.css'
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
      <Fade>
        <FirstSection />
      </Fade>
      <Fade>
        <SecondSection />
      </Fade>
      <Fade>
        <ThirdSection />
      </Fade>
      <Fade>
        <Reviews />
      </Fade>
    </>
  )
}

export default App
