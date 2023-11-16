/* eslint-disable space-unary-ops */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../home/Navbar/Navbar'
import Tag from '../home/ThirdSection/utils/cards/Tag'
import Loader from '../commons/Loader'

const SingleBlog = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${slug}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error('Errore nella richiesta API:', error)
      }
    }

    fetchPost()
  }, [slug])

  if (!post) {
    return (
      <Loader
        className='flex justify-center items-center h-screen'
      />
    )
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
        <div className='flex flex-col gap-16'>
          <header>
            <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
            <div className='flex gap-4 text-myGray'>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <Tag tagText={post.tag} />
              <span>{`Tempo di lettura: ${post.readTime.value} ${post.readTime.unit}`}</span>
            </div>
          </header>
          <p className='text-myGray text-base md:text-lg lg:text-xl text-justify'>
            {post.body}
          </p>
          {/* Altri dati del post possono essere stampati qui */}
        </div>
      </div>
    </section>
  )
}

export default SingleBlog
