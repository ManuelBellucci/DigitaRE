import Nav from '../Navbar/Navbar.jsx'
import HeroContent from './utils/HeroContent.jsx'
import HeroContainer from './utils/containers/HeroContainer.jsx'
import data from '../../data/hero.json'

const Hero = () => {
  return (
    <HeroContainer>
      <Nav />
      <HeroContent
        title={data.title}
        gradientPhrase={data.gradientPhrase}
        title2={data.title2}
        subtitle={data.subtitle}
      />
    </HeroContainer>
  )
}
export default Hero
