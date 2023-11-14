import Hero from './Components/home/Hero/Hero'
import FirstSection from './Components/home/FirstSection/FirstSection'
import SecondSection from './Components/home/SecondSection/SecondSection'
import ThirdSection from './Components/home/ThirdSection/ThirdSection'
import Reviews from './Components/home/Reviews/Reviews'
import { Fade } from 'react-awesome-reveal'
import { FloatButton } from 'antd'
import Contact from './Components/home/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllBlogs from './Components/blog/AllBlogs'
import SingleBlog from './Components/blog/SingleBlog'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/blog' element={<AllBlogs />} />
        <Route path='/blog/:slug' element={<SingleBlog />} />
        <Route
          path='/'
          element={
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
            </>
          }
        />
      </Routes>
      <FloatButton.BackTop className='hover:bg-myGray' />
    </Router>
  )
}

export default App
