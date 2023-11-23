/* eslint-disable react/jsx-pascal-case */
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import CTA from '../../commons/CTA'
import Pagination from '../../commons/Pagination'
import Loader from '../../commons/Loader'
import ErrorMessage from '../../commons/ErrorMessage'
import BlogFilter from '../../blog/utils/BlogFilter'

const PostListModal = ({ isOpen, onRequestClose }) => {
  const [posts, setPosts] = useState([])
  const [titleFilter, setTitleFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('nofilter')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError(true)
        setLoading(false)
      }
    }

    if (isOpen) {
      fetchPosts()
    }
  }, [isOpen])

  const handleDelete = async (postId) => {
    console.log('Delete post with id:', postId)
  }

  const handleEdit = (postId) => {
    console.log('Edit post with id:', postId)
  }

  const filteredPosts = posts.filter(post => {
    const titleMatches = post.title.toLowerCase().includes(titleFilter.toLowerCase())
    const categoryMatches = categoryFilter === 'nofilter' || post.tag === categoryFilter

    return titleMatches && categoryMatches
  })
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Lista di post'
    >
      <BlogFilter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <h2>Lista dei post</h2>
      {loading && <Loader />}
      {error && <ErrorMessage text='Errore nel caricamento dei post' />}
      {!loading && !error && (
        <div className='text-black flex flex-col gap-4 p-2 sm:p-4 md:p-6 lg:p-10'>
          {currentPosts.map((post) => (
            <div
              key={String(post._id)}
              className='flex gap-4 items-center justify-between'
            >
              <span className='text-sm md:text-base'>
                {post.title}
              </span>
              <div className='flex gap-3'>
                <CTA
                  text='Delete post'
                  onClick={() => handleDelete(post._id)} className='text-xs rounded-md cursor-pointer'
                />
                <CTA
                  text='Edit post'
                  onClick={() => handleEdit(post._id)} className='text-xs rounded-md cursor-pointer'
                />
              </div>
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      )}
    </Modal>
  )
}

export default PostListModal
