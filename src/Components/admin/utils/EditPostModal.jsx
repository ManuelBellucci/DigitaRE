// import React, { useState } from 'react'
// import ReactModal from 'react-modal'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
// import ErrorMessage from '../../commons/ErrorMessage'
// import Loader from '../../commons/Loader'

// const EditPostModal = ({ isOpen, onRequestClose, post, setEditedPost }) => {
//   const [title, setTitle] = useState(post.title || '') // Add default value to handle undefined
//   const [category, setCategory] = useState(post.category || '') // Add default value to handle undefined
//   const [content, setContent] = useState(post.body || '') // Add default value to handle undefined
//   const [image, setImage] = useState(post.image || '') // Add default value to handle undefined
//   const [isFeatured, setIsFeatured] = useState(post.isFeatured || false)
//   const [readTime, setReadTime] = useState(post.readTime || 0)
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleQuillChange = (value) => {
//     setContent(value)
//   }

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value)
//   }

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value)
//   }

//   const handleCheckboxChange = (e) => {
//     setIsFeatured(e.target.checked)
//   }

//   const handleReadTimeChange = (e) => {
//     const minutes = parseInt(e.target.value, 10)
//     setReadTime(isNaN(minutes) ? 0 : minutes)
//   }

//   const handleImageChange = (e) => {
//     setImage(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const editedPost = {
//       title,
//       category,
//       isFeatured,
//       readTime,
//       image,
//       body: encodeURIComponent(content)
//     }
//     console.log('Edited post:', editedPost)

//     fetch(`http://localhost:3001/api/posts/${post._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(editedPost)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data)
//         setEditedPost(data)
//         onRequestClose()
//       })
//       .catch((error) => {
//         console.error('Error:', error)
//         setError(true)
//         setLoading(false)
//       })
//   }

//   return (
//     <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel='Edit Post'>
//       {error && <ErrorMessage text='Errore durante la modifica del post' />}
//       {loading && <Loader />}
//       <form className='text-black flex flex-col'>
//         <div className='flex gap-2'>
//           <label>Title:</label>
//           <input
//             placeholder='Titolo del post'
//             className='placeholder:text-gray-400'
//             type='text'
//             value={title}
//             onChange={handleTitleChange}
//           />
//         </div>

//         <div className='flex gap-2'>
//           <label>Category:</label>
//           <input
//             placeholder='Categoria del post'
//             className='placeholder:text-gray-400'
//             type='text'
//             value={category}
//             onChange={handleCategoryChange}
//           />
//         </div>

//         <div className='flex gap-2'>
//           <label>Image:</label>
//           <input
//             placeholder='Immagine del post'
//             className='placeholder:text-gray-400'
//             type='text'
//             value={image}
//             onChange={handleImageChange}
//           />
//         </div>

//         <div className='flex gap-2'>
//           <label>Read time:</label>
//           <input
//             placeholder='Tempo di lettura'
//             className='placeholder:text-gray-400'
//             type='number'
//             value={readTime}
//             onChange={handleReadTimeChange}
//           />
//         </div>

//         <label>
//           Is Featured:
//           <input
//             className='placeholder:text-myGray'
//             type='checkbox'
//             checked={isFeatured}
//             onChange={handleCheckboxChange}
//           />
//         </label>

//         <ReactQuill
//           value={content}
//           onChange={handleQuillChange}
//           modules={{
//             toolbar: [
//               [{ header: [1, 2, false] }],
//               ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//               [{ list: 'ordered' }, { list: 'bullet' }],
//               ['link', 'image'],
//               ['clean']
//             ]
//           }}
//         />
//         <button type='submit' onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </ReactModal>
//   )
// }

// export default EditPostModal
