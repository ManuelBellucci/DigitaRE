// imports
import Nav from '../Navbar/Navbar.jsx'
import HeroContent from './utils/HeroContent.jsx'
import HeroContainer from './utils/containers/HeroContainer.jsx'
import data from '../../../data/hero.json'

const Hero = () => {
  // destructuring
  const { title, gradientPhrase, title2, subtitle } = data

  return (
    <HeroContainer>
      <Nav />
      <HeroContent
        title={title}
        gradientPhrase={gradientPhrase}
        title2={title2}
        subtitle={subtitle}
      />
    </HeroContainer>
  )
}
export default Hero
