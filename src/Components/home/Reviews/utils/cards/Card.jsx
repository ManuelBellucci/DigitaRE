// imports
import { Rate } from 'antd'

const Card = ({ profilePicSrc, author, business, content }) => (
  <div className='p-6 w-full flex flex-col justify-between items-start gap-4 border border-white rounded'>
    <div className='w-full flex gap-4 items-center'>
      <img
        loading='lazy'
        src={profilePicSrc}
        alt='profile pic of'
        className='rounded-full h-12 w-12 max-h-12'
      />
      <div className='flex flex-col gap-1'>
        <h4 className='font-bold text-base md:text-lg lg:text-xl'>{author}</h4>
        <span className='text-sm md:text-base lg:text-lg'>{business}</span>
        <Rate
          disabled
          defaultValue={5}
          className='flex flex-nowrap text-sm md:text-base lg:text-lg'
        />
      </div>
    </div>
    <div className='text-myGray text-sm md:text-base lg:text-lg text-justify overflow-hidden'>
      {content}
    </div>
  </div>
)

export default Card
