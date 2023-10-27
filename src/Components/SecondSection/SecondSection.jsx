import CTAButton from '../commons/CTAButton'

const SecondSection = () => {
  return (
    <section className='w-full h-[596px] shrink-0 grid grid-cols-2'>
      <div className='flex self-center justify-center'>
        <img src='/src/assets/secondsection.svg' alt='second section image' />
      </div>
      <div className='flex flex-col self-center w-[523px] items-start gap-8'>
        <div className='flex flex-col gap-5'>
          <h2 className='self-stretch text-4xl font-bold'>Lorem ipsum</h2>
          <p className='text-myGray'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi illo quaerat tenetur error dignissimos.</p>
        </div>
        <CTAButton href='/' text='text' />
      </div>
    </section>
  )
}

export default SecondSection
