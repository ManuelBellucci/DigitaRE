const CTA = ({ href, text, className, onClick }) => {
  return (
    <a
      href={href}
      className={`border font-bold border-primary px-6 py-[10px] rounded-3xl hover:bg-primary hover:text-tag transition-all ease-in ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </a>
  )
}

export default CTA
