const CarouselControls = ({ onPrev, onNext }) => (
  <>
    <div className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-4xl my-10' data-carousel-prev onClick={onPrev}>
      &lt;
    </div>
    <div className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-4xl my-10' data-carousel-next onClick={onNext}>
      &gt;
    </div>
  </>
)

export default CarouselControls
