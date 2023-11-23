import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import ReactQuill from 'react-quill'

const EditPostModal = ({ isOpen, onRequestClose, post, onSave }) => {
  const [editedPost, setEditedPost] = useState(post ?? {
    title: '',
    body: '',
    tag: '',
    cover: '',
    isFeatured: false
  })

  useEffect(() => {
    setEditedPost(post ?? {
      title: '',
      body: '',
      tag: '',
      cover: '',
      isFeatured: false
    })
  }, [post])

  const handleSave = () => {
    onSave(editedPost)
    onRequestClose()
  }

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel='Modifica post' className='flex flex-col text-black p-10 gap-10'>
      <input
        type='text'
        value={editedPost.title || ''}
        onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
      />
      <ReactQuill
        theme='snow'
        value={editedPost.body || ''}
        onChange={(value) => setEditedPost({ ...editedPost, body: value })}
      />
      <input
        type='text'
        value={editedPost.tag || ''}
        onChange={(e) => setEditedPost({ ...editedPost, tag: e.target.value })}
      />
      <input
        type='text'
        value={editedPost.cover || ''}
        onChange={(e) => setEditedPost({ ...editedPost, cover: e.target.value })}
      />
      <label>
        Is Featured:
        <input
          type='checkbox'
          checked={editedPost.isFeatured || false}
          onChange={(e) => setEditedPost({ ...editedPost, isFeatured: e.target.checked })}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </ReactModal>
  )
}

export default EditPostModal
