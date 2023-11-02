import { Slide } from 'react-awesome-reveal'

const Form = ({ children }) => {
  return (
    <Slide triggerOnce>
      <form className='flex flex-col w-full max-w-lg items-start gap-6 shrink-0'>
        {children}
      </form>
    </Slide>
  )
}

export default Form
