const ImageContainer = ({ src }) => (
  <img loading='lazy' src={src} alt={src} className='self-center object-cover rounded w-full' />
)

export default ImageContainer
