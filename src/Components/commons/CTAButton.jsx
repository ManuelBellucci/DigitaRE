const CTAButton = ({ href, text }) => {
  return (
    <a href={href} className='border border-primary px-6 py-[10px] rounded-3xl hover:bg-primary transition-all ease-in'>
      {text}
    </a>
  )
}

export default CTAButton
