import { useState } from 'react'
import Pagination from '../commons/Pagination'
import BlogFilter from './utils/BlogFilter'
import BlogListContainer from './utils/BlogListContainer'
import BlogListContent from './utils/BlogListContent'
import useFetchBlogPosts from './utils/customHooks/useFetchBlogPosts'
import usePagination from './utils/customHooks/usePagination'

const AllBlogs = () => {
  const blogPosts = useFetchBlogPosts()
  const [titleFilter, setTitleFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('nofilter')

  const filterPosts = () => {
    return blogPosts.filter(post => {
      const titleMatches = post.title.toLowerCase().includes(titleFilter.toLowerCase())
      const categoryMatches = categoryFilter === 'nofilter' || post.tag === categoryFilter

      return titleMatches && categoryMatches
    })
  }
  const { currentPage, totalPages, handlePrevPage, handleNextPage, startIndex, endIndex } = usePagination(
    filterPosts().length,
    6
  )

  const currentPosts = filterPosts().slice(startIndex, endIndex)

  return (
    <BlogListContainer>
      <h1 className='self-stretch text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Blog DigitaRE</h1>
      <BlogFilter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <BlogListContent currentPosts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </BlogListContainer>
  )
}

export default AllBlogs
