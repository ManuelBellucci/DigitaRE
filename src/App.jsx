import Hero from './components/home/Hero/Hero'
import FirstSection from './components/home/FirstSection/FirstSection'
import SecondSection from './components/home/SecondSection/SecondSection'
import ThirdSection from './components/home/ThirdSection/ThirdSection'
import Reviews from './components/home/Reviews/Reviews'
import { Fade } from 'react-awesome-reveal'
import { FloatButton } from 'antd'
import Contact from './components/home/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllBlogs from './components/blog/AllBlogs'
import SingleBlog from './components/blog/utils/SingleBlog'
import Nav from './components/home/Navbar/Navbar'
import Footer from './components/home/Footer/Footer'
import NotFound from './components/404/NotFound'
import Admin from './components/admin/Admin'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/blog' element={<AllBlogs />} />
        <Route path='/blog/:slug' element={<SingleBlog />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/admin' element={<Admin />} />
        <Route
          path='/contatti'
          element={
            <>
              <Nav isContactRoute />
              <Contact />
            </>
          }
        />
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
                <Footer />
              </Fade>
            </>
            }
        />
      </Routes>
      <FloatButton.BackTop className='hover:bg-primary transition-all ease-in' />
    </Router>
  )
}

export default App
