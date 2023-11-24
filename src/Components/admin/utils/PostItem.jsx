/* eslint-disable react/jsx-pascal-case */
import CTA from '../../commons/CTA'

const PostItem = ({ post, handleDelete, handleEdit }) => (
  <div className='flex gap-x-10 items-center justify-between'>
    <span className='text-sm md:text-base w-[50%] truncate'>{post.title}</span>
    <div className='flex gap-3 w-[50%] justify-end'>
      <CTA
        text='Elimina'
        onClick={() => handleDelete(post._id)}
        className='text-xs rounded-md cursor-pointer'
      />
      <CTA
        text='Modifica'
        onClick={() => handleEdit(post._id)}
        className='text-xs rounded-md cursor-pointer'
      />
    </div>
  </div>
)

export default PostItem
