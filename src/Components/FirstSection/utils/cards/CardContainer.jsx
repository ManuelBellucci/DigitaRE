import { Zoom } from 'react-awesome-reveal'
const CardContainer = ({ children }) => {
  return (
    <Zoom triggerOnce>
      <div className='grid lg:grid-cols-3 grid-cols-1 items-start gap-[32px] self-stretch'>
        {children}
      </div>
    </Zoom>
  )
}
export default CardContainer
