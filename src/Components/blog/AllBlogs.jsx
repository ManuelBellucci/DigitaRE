import Pagination from '../commons/Pagination'
import CardWithImage from '../home/ThirdSection/utils/cards/CardWithImage'
import CardWithoutImage from '../home/ThirdSection/utils/cards/CardWithoutImage'
import { useEffect, useState } from 'react'
import BlogFilter from './utils/BlogFilter'
import BlogListContainer from './utils/BlogListContainer'

const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [titleFilter, setTitleFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('nofilter')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Errore nella richiesta API:', error))
  }, [])

  const filteredPosts = blogPosts.filter(post => {
    const titleMatches = post.title.toLowerCase().includes(titleFilter.toLowerCase())
    const categoryMatches = categoryFilter === 'nofilter' || post.tag === categoryFilter

    return titleMatches && categoryMatches
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

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

  return (
    <BlogListContainer>
      <h1 className='self-stretch text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Blog DigitaRE</h1>
      <BlogFilter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <div className='flex flex-col gap-8'>
        {currentPosts.map((post) => (
          post.cover
            ? (
              <CardWithImage
                key={post._id}
                tagText={post.tag}
                title={post.title}
                src={post.cover}
                href={`/blog/${post.title
                  .toLowerCase()
                  .replace(/[^\w\s]/gi, '')
                  .replace(/\s+/g, '-')
                  .replace(/-{2,}/g, '')
                  .trim()}`}
                alt='Post cover image'
              />
              )
            : (
              <CardWithoutImage
                key={post._id}
                tagText={post.tag}
                title={post.title}
                href={`/blog/${post.title
                  .toLowerCase()
                  .replace(/[^\w\s]/gi, '')
                  .replace(/\s+/g, '-')
                  .replace(/-{2,}/g, '')
                  .trim()}`}
              />
              )
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
    </BlogListContainer>
  )
}

export default AllBlogs
