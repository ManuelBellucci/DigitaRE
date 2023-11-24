// imports
import React from 'react'
import CardWithImage from '../../home/ThirdSection/utils/cards/CardWithImage'
import CardWithoutImage from '../../home/ThirdSection/utils/cards/CardWithoutImage'

const BlogListContent = ({ currentPosts }) => (
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
)

export default BlogListContent
