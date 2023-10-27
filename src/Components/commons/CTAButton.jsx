const CTAButton = ({ href, text }) => {
  return (
    <a href={href} className='border border-[#FFA800] px-6 py-[10px] rounded-3xl hover:bg-[#FFA800] transition-all ease-in'>
      {text}
    </a>
  )
}

export default CTAButton
