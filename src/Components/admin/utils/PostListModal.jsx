/* eslint-disable react/jsx-pascal-case */

// imports
import { useState, useEffect } from 'react'
import Pagination from '../../commons/Pagination'
import Loader from '../../commons/Loader'
import ErrorMessage from '../../commons/ErrorMessage'
import BlogFilter from '../../blog/utils/BlogFilter'
import PostItem from './PostItem'
import ReactModal from 'react-modal'

const PostListModal = ({ isOpen, onRequestClose }) => {
  // states
  const [posts, setPosts] = useState([])
  const [titleFilter, setTitleFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('nofilter')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // numero di post da renderizzare per pagina
  const postsPerPage = 6

  // funzione per renderizzare i PostItem dai currentPosts
  const renderPostItems = () => {
    return currentPosts.map((post) => (
      <PostItem
        key={String(post._id)}
        post={post}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    ))
  }

  // funzione per renderizzare la paginazione da Pagination
  const renderPagination = () => {
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    )
  }

  // effetto per fetchare i post quando il modal è aperto (isOpen)
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

  // TODO: funzione per gestire l'operazione DELETE di un post
  const handleDelete = async (postId) => {
    console.log('Delete post with id:', postId)
  }

  // TODO: funzione per gestire l'operazione PUT di un post
  const handleEdit = (postId) => {
    console.log('Edit post with id:', postId)
  }

  // costanti per salvare i post filtrati in base al titolo e categoria
  const filteredPosts = posts.filter(post => {
    const titleMatches = post.title.toLowerCase().includes(titleFilter.toLowerCase())
    const categoryMatches = categoryFilter === 'nofilter' || post.tag === categoryFilter

    return titleMatches && categoryMatches
  })

  // costante per salvare il numero totale di pagine in base ai post filtrati e il numero tot. di pagine
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // costanti per salvare i valori degli indici e i post attualmente renderizzati nella pagina
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // costanti per sapere se dobbiamo renderizzare il bottone prev o next.
  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  // funzioni per gestire la navigazione tra pagine
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
    <ReactModal
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
      {loading && <Loader />}
      {error && <ErrorMessage text='Errore nel caricamento dei post' />}
      {!loading && !error && (
        <div className='text-black flex flex-col gap-14 p-2 sm:p-4 md:p-6 lg:p-10 mt-10'>
          {renderPostItems()}
          {renderPagination()}
        </div>
      )}
    </ReactModal>
  )
}

export default PostListModal
