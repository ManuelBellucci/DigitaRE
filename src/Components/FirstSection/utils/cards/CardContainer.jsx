const CardContainer = ({ children }) => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 items-start gap-[32px] self-stretch'>
      {children}
    </div>
  )
}
export default CardContainer
