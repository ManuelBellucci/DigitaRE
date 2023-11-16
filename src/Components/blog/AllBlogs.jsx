import Nav from '../home/Navbar/Navbar'
import CardWithImage from '../home/ThirdSection/utils/cards/CardWithImage'
import CardWithoutImage from '../home/ThirdSection/utils/cards/CardWithoutImage'
import { useEffect, useState } from 'react'

const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [titleFilter, setTitleFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('nofilter')

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

  return (
    <div className='px-10 lg:px-[70px]'>
      <Nav isBlogRoute /> {/* Passa true a isBlogRoute quando sei nella rotta /blog */}
      <section className='bg-[#242424] h-full flex flex-col gap-10 text-center w-full pt-10 pb-[70px] '>
        <h1 className='self-stretch text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Blog DigitaRE</h1>
        <div className='flex gap-4'>
          <input
            type='text'
            name='browser'
            placeholder='Cerca ora'
            id='browser'
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
            className='text-black p-4 w-[80%] font-bold text-center self-center rounded'
          />
          <select
            name='filter'
            id='filter'
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className='text-black p-4 w-[20%] rounded bg-slate-200'
          >
            <option value='nofilter'>Senza filtro</option>
            <option value='acquisizione'>Acquisizione</option>
            <option value='advertising'>Advertising</option>
            <option value='vendita'>Vendita</option>
          </select>
        </div>

        <div className='flex flex-col gap-8'>
          {filteredPosts.map((post, index) => (
            post.cover
              ? (
                <CardWithImage
                  key={index}
                  tagText={post.tag}
                  title={post.title}
                  src={post.cover}
                  href={`/blog/${post.title
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, '')
                    .replace(/\s+/g, '-')
                    .replace(/-{2,}/g, '')
                    .trim()
                }`}
                  alt='Post cover image'
                />
                )
              : (
                <CardWithoutImage
                  key={index}
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
      </section>
    </div>
  )
}

export default AllBlogs
