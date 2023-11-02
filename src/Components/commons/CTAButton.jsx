const CTAButton = ({ href, text, className, onClick }) => {
  return (
    <a
      href={href}
      className={`border hover:text-tag font-bold border-primary px-6 py-[10px] rounded-3xl hover:bg-primary transition-all ease-in ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </a>
  )
}

export default CTAButton
