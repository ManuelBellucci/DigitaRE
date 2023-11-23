import CTAWithLink from '../commons/CTAWithLink'
import Image404 from './utils/Image404'
import Text404 from './utils/Text404'

const NotFound = () => {
  return (
    <section>
      <div className='py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center flex flex-col items-center'>
          <Image404
            src='./public/assets/404.svg'
          />
          <Text404
            title='404'
            sub='Page not found'
            sub2='The page you are looking for does not exist.'
          />
          <CTAWithLink
            href='/'
            text='Back to homepage' className='mt-4'
          />
        </div>
      </div>
    </section>
  )
}

export default NotFound
