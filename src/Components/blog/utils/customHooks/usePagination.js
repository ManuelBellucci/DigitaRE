// imports
import { useState } from 'react'

// custom hook per la paginazione
const usePagination = (totalItems, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return {
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    startIndex: (currentPage - 1) * itemsPerPage,
    endIndex: currentPage * itemsPerPage
  }
}

export default usePagination
