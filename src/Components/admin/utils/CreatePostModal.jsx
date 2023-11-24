// imports
import { useState } from 'react'
import ReactModal from 'react-modal'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePostModal = ({ isOpen, onRequestClose }) => {
  // states
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [isFeatured, setIsFeatured] = useState(false)
  const [readTime, setReadTime] = useState(0)
  const [cover, setCover] = useState('')
  const [content, setContent] = useState('')

  // funzione per gestire il contenuto del quill editor
  const handleQuillChange = (value) => {
    setContent(String(value))
  }

  // funzioni per gestire i cambiamenti dell'input del titolo
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  // funzioni per gestire i cambiamenti dell'input del tag
  const handleTagChange = (e) => {
    setTag(e.target.value)
  }

  // funzioni per gestire i cambiamenti dell'input del checkbox
  const handleCheckboxChange = (e) => {
    setIsFeatured(e.target.checked)
  }

  // funzioni per gestire i cambiamenti dell'input del read time
  const handleReadTimeChange = (e) => {
    const minutes = parseInt(e.target.value, 10)
    setReadTime(isNaN(minutes) ? 0 : minutes)
  }

  // funzioni per gestire i cambiamenti dell'input della cover
  const handleCoverChange = (e) => {
    setCover(e.target.value)
  }

  // funzione per gestire la submit del form
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      title,
      tag,
      isFeatured,
      readTime,
      cover,
      body: encodeURIComponent(content)
    }
    console.log('New post:', newPost)

    // fetch per creare un nuovo post
    fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error))

    // resetta i campi del form
    setTitle('')
    setTag('')
    setIsFeatured(false)
    setReadTime(0)
    setCover('')
    setContent('')

    // chiude il modal
    onRequestClose()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Create Post'
    >
      <form className='text-black flex flex-col'>
        <div className='flex gap-2'>
          <label>Title:</label>
          <input
            placeholder='Titolo del post'
            className='placeholder:text-gray-400'
            type='text'
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className='flex gap-2'>
          <label>
            Tag:
            <select value={tag} onChange={handleTagChange}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </label>
        </div>

        <label>
          Is Featured:
          <input
            className='placeholder:text-myGray'
            type='checkbox'
            checked={isFeatured}
            onChange={handleCheckboxChange}
          />
        </label>

        <div className='flex gap-2'>
          <label>Read Time (minutes):</label>
          <input
            className='placeholder:text-myGray'
            type='number'
            value={readTime}
            onChange={handleReadTimeChange}
          />
        </div>

        <div className='flex gap-2 mb-5'>
          <label>Cover URL:</label>
          <input
            placeholder='Cover URL'
            className='placeholder:text-gray-400'
            type='text'
            value={cover}
            onChange={handleCoverChange}
          />
        </div>

        <ReactQuill
          value={content}
          onChange={handleQuillChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean']
            ]
          }}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </ReactModal>
  )
}

export default CreatePostModal
