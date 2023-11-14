/* eslint-disable space-unary-ops */
// imports
const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')
const mongoose = require('mongoose')

// middlware gestione errori
const handleErrors = (res, error, message) => {
  console.error(`Errore: ${message}`, error)
  res.status(500).json({ error: message, details: error.message })
}

// ottenere tutti i post (anche per query ?title=...)
router.get('/', async (req, res) => {
  try {
    const title = req.query.title
    const query = title ? { title: { $regex: title, $options: 'i' } } : {}

    const posts = await Post.find(query)
    res.json(posts)
  } catch (error) {
    handleErrors(res, error, 'Recupero dei post')
  }
})

// creare un nuovo post
router.post('/', async (req, res) => {
  try {
    const { title, body, date, tag, cover, readTime } = req.body

    if (!title || !body) {
      return res.status(400).json({ error: 'I parametri title e body sono obbligatori' })
    }

    const post = new Post({ title, body, date, tag, cover, readTime })
    const savedPost = await post.save()

    res.json(savedPost)
  } catch (error) {
    handleErrors(res, error, 'Creazione del post')
  }
})

// ottenere un post specifico
router.get('/:_id', async (req, res) => {
  const id = req.params._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'L\'id specificato non è valido' })
  }

  try {
    const post = await Post.findById(id)

    if (!post) {
      res.status(404).json({ error: `Il post con l'id ${id} non è stato trovato` })
    } else {
      res.json(post)
    }
  } catch (error) {
    handleErrors(res, error, 'Recupero del post')
  }
})

// eliminare un post specifico
router.delete('/:_id', async (req, res) => {
  const id = req.params._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'L\'id specificato non è valido' })
  }

  try {
    const deletedPost = await Post.findByIdAndDelete(id)

    if (!deletedPost) {
      res.status(404).json({ error: `Il post con l'id ${id} non è stato trovato` })
    } else {
      res.json(deletedPost)
    }
  } catch (error) {
    handleErrors(res, error, 'Eliminazione del post')
  }
})

module.exports = router
