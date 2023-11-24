// imports
import { useEffect, useState } from 'react'

// custom hook per fetchare i post del blog
const useFetchBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts')
        const data = await response.json()
        setBlogPosts(data)
      } catch (error) {
        console.error('Errore nella richiesta API:', error)
      }
    }

    fetchBlogPosts()
  }, [])

  return blogPosts
}

export default useFetchBlogPosts
