/* eslint-disable space-unary-ops */

// imports
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Nav from '../../home/Navbar/Navbar'
import Tag from '../../home/ThirdSection/utils/cards/Tag'
import Loader from '../../commons/Loader'
import NotFound from '../../404/NotFound'
import ErrorMessage from '../../commons/ErrorMessage'

const SingleBlog = () => {
  // states e hooks
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // efetto per fetchare un post in base allo slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${slug}`)
        if (!response.ok) {
          throw new Error('Post non trovato')
        }
        const data = await response.json()
        setPost(data)
      } catch (error) {
        setError(error)
        navigate('/404')
        console.error('Errore nella richiesta API:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug, navigate])

  // se il post è in caricamento mostro il loader
  if (loading) {
    return <Loader className='flex justify-center items-center h-screen' />
  }

  // se c'è un errore mostro il messaggio di errore
  if (error) { return <ErrorMessage text={error.message} /> }

  // se non c'è post l'utente va in 404
  if (!post) {
    navigate('/404')
    return <NotFound />
  }

  return (
    <section className='px-[70px] pb-[70px]'>
      <Nav />
      <div className='flex flex-col gap-8 mt-10'>
        {post.cover && (
          <img
            src={post.cover}
            alt='cover image'
            className='w-full h-40 md:h-60 lg:h-96 object-cover'
          />
        )}
        <div className='flex flex-col gap-10'>
          <header className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-2 text-center'>{post.title}</h1>
            <div className='flex gap-4 text-myGray items-center'>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <Tag tagText={post.tag} />
            </div>
            <span className='text-myGray'>  {post.readTime && `Tempo di lettura: ${post.readTime.value} ${post.readTime.unit}`}</span>
          </header>
          <div
            className='text-myGray text-base md:text-lg lg:text-xl text-justify'
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </div>
    </section>
  )
}

export default SingleBlog
