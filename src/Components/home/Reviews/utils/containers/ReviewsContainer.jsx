// imports
import { Slide } from 'react-awesome-reveal'

const ReviewsContainer = ({ children }) => (
  <section className='bg-black w-full px-[70px] py-20 overflow-hidden'>
    <Slide direction='right' triggerOnce>
      {children}
    </Slide>
  </section>
)

export default ReviewsContainer
