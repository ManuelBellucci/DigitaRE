// imports
import { Slide } from 'react-awesome-reveal'
import Submit from './Submit'

const Form = ({ children, onSubmit }) => (
  <Slide triggerOnce>
    <form className='flex flex-col w-full max-w-lg items-start gap-6 shrink-0'>
      {children}
    </form>
    <Submit onSubmit={onSubmit} />
  </Slide>
)

export default Form
