const CardContainer = ({ children }) => {
  return (
    <div className='flex items-start gap-[32px] self-stretch'>
      {children}
    </div>
  )
}
export default CardContainer
