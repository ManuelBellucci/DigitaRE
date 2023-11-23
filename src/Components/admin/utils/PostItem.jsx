/* eslint-disable react/jsx-pascal-case */
import CTA from '../../commons/CTA'

const PostItem = ({ post, handleDelete, handleEdit }) => (
  <div className='flex gap-4 items-center justify-between'>
    <span className='text-sm md:text-base w-[50%]'>{post.title}</span>
    <div className='flex gap-3 w-[50%] justify-end'>
      <CTA
        text='Delete post'
        onClick={() => handleDelete(post._id)}
        className='text-xs rounded-md cursor-pointer'
      />
      <CTA
        text='Edit post'
        onClick={() => handleEdit(post._id)}
        className='text-xs rounded-md cursor-pointer'
      />
    </div>
  </div>
)

export default PostItem
