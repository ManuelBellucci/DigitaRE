const Card = ({ profilePicSrc, author, business, content }) => {
  return (
    <div className='p-6 flex flex-col justify-center items-start gap-4 flex-1 border border-white rounded'>
      <div className='flex gap-4 items-center'>
        <img src={profilePicSrc} alt='profile pic of' className='rounded-full h-12 w-12' />
        <div className='flex flex-col'>
          <h4 className='font-bold'>{author}</h4>
          <span>{business}</span>
        </div>
      </div>
      <div className='text-myGray'>{content}</div>
    </div>
  )
}

export default Card
