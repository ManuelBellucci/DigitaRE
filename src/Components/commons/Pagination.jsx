/* eslint-disable react/jsx-pascal-case */

// imports
import CTA from './CTA'

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage, paginate }) => {
  // costanti per verificare se esiste la prev o la next page, cosi se sono nella prima pagina vedrò solo il next button e viceversa
  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <div className='flex justify-center gap-2'>
      {hasPrevPage && (
        <CTA
          onClick={handlePrevPage} className='text-md text-tag cursor-pointer font-extrabold rounded-full'
          text='<'
        />
      )}
      {hasNextPage && (
        <CTA
          onClick={handleNextPage} className='text-md text-tag cursor-pointer font-extrabold rounded-full'
          text='>'
        />
      )}
    </div>
  )
}

export default Pagination
