/* eslint-disable react/jsx-pascal-case */
import CTA from './CTA'

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage, paginate }) => {
  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <div className='flex justify-center gap-2'>
      {hasPrevPage && (
        <CTA onClick={handlePrevPage} text='<' className='text-md cursor-pointer font-extrabold rounded-full px-1 py-1' />
      )}
      {hasNextPage && (
        <CTA onClick={handleNextPage} className='text-md cursor-pointer font-extrabold rounded-full px-1 py-1' text='>' />
      )}
    </div>
  )
}

export default Pagination
