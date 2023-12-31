const ImageContainer = ({ src, alt }) => (
  <img
    loading='lazy'
    src={src}
    alt={src ? alt : 'No image available'}
    className='self-center max-h-64 object-cover rounded w-full'
  />
)

export default ImageContainer
