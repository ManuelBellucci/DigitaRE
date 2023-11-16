import { Link } from 'react-router-dom'

const Readmore = ({ href }) => {
  return (
    <div className='flex gap-2 items-center'>
      <Link
        to={href}
        className='text-readmore text-center text-base md:text-lg lg:text-xl group-hover:text-blue-950 transition-all ease-in'
      >Leggi l'articolo
        <img
          loading='lazy'
          alt='read more'
          src='/assets/readmore.svg'
          className='inline px-1 transition-all ease-in'
        />
      </Link>
    </div>
  )
}

export default Readmore
