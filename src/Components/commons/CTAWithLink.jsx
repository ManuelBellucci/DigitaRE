import { Link } from 'react-router-dom'

const CTAWithLink = ({ href, text, className, onClick }) => {
  return (
    <Link
      to={href}
      className={`border font-bold border-primary px-6 py-[10px] rounded-3xl hover:bg-primary hover:text-tag transition-all ease-in ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </Link>
  )
}

export default CTAWithLink