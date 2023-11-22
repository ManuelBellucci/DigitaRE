import CTAButtonWithLink from './commons/CTAWithLink'

const NotFound = () => {
  return (
    <section>
      <div className='py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center flex flex-col items-center'>
          <img src='./public/assets/404.svg' alt='404 image' className='h-[300px] w-[300px]' loading='lazy' />
          <h1 className='mb-2 text-5xl tracking-tight font-extrabold lg:text-9xl text-primary'>404</h1>
          <p className='text-xl tracking-tight font-bold text-white md:text-4xl '>Something's missing.</p>
          <p className='text-lg font-light text-myGray '>Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
          <CTAButtonWithLink href='/' text='Back to homepage' className='mt-4' />
        </div>
      </div>
    </section>
  )
}

export default NotFound
