const Readmore = ({ href }) => {
  return (
    <div className='flex gap-2 items-center'>
      <a href={href} className='text-readmore text-center text-base md:text-lg lg:text-xl group-hover:text-blue-950 transition-all ease-in'>Read more
        <img loading='lazy' src='/assets/readmore.svg' className='inline px-1 transition-all ease-in' />
      </a>
    </div>
  )
}

export default Readmore