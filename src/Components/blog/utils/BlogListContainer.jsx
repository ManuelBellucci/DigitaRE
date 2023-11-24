// imports
import Nav from '../../home/Navbar/Navbar'

const BlogListContainer = ({ children }) => (
  <div className='px-10 lg:px-[70px]'>
    <Nav isBlogRoute />
    <section className='bg-[#242424] h-full flex flex-col gap-10 text-center w-full pt-10 pb-[70px] '>
      {children}
    </section>
  </div>
)

export default BlogListContainer
