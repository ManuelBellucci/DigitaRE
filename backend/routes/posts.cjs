/* eslint-disable space-unary-ops */
const express = require('express')
const router = express.Router()
const Post = require('../models/postModel.cjs')

const handleErrors = (res, error, message) => {
  console.error(`Errore: ${message}`, error)
  res.status(500).json({ error: message, details: error.message })
}

// Ottenere tutti i post
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

// Creare un nuovo post
router.post('/', async (req, res) => {
  try {
    const { title, body, date, tag, cover, readTime } = req.body

    if (!title || !body) {
      return res.status(400).json({ error: 'I parametri title e body sono obbligatori' })
    }

    const decodedBody = decodeURIComponent(body)

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .replace(/-{2,}/g, '')
      .trim()

    const post = new Post({ title, body: decodedBody, date, tag, cover, readTime, slug })
    const savedPost = await post.save()

    res.json(savedPost)
  } catch (error) {
    handleErrors(res, error, 'Creazione del post')
  }
})

// Ottenere un post specifico utilizzando lo slug
router.get('/:slug', async (req, res) => {
  const slug = req.params.slug

  try {
    const post = await Post.findOne({ slug })

    if (!post) {
      res.status(404).json({ error: `Il post con lo slug ${slug} non è stato trovato` })
    } else {
      res.json(post)
    }
  } catch (error) {
    handleErrors(res, error, 'Recupero del post')
  }
})

// Eliminare un post specifico utilizzando lo slug
router.delete('/:slug', async (req, res) => {
  const slug = req.params.slug

  try {
    const deletedPost = await Post.findOneAndDelete({ slug })

    if (!deletedPost) {
      res.status(404).json({ error: `Il post con lo slug ${slug} non è stato trovato` })
    } else {
      res.json(deletedPost)
    }
  } catch (error) {
    handleErrors(res, error, 'Eliminazione del post')
  }
})

router.put('/:slug', async (req, res) => {
  const slug = req.params.slug

  try {
    const { title, body, date, tag, cover, readTime } = req.body

    if (!title || !body) {
      return res.status(400).json({ error: 'I parametri title e body sono obbligatori' })
    }

    const decodedBody = decodeURIComponent(body)

    const updatedPost = await Post.findOneAndUpdate(
      { slug },
      { title, body: decodedBody, date, tag, cover, readTime },
      { new: true }
    )

    if (!updatedPost) {
      res.status(404).json({ error: `Il post con lo slug ${slug} non è stato trovato` })
    } else {
      res.json(updatedPost)
    }
  } catch (error) {
    handleErrors(res, error, 'Modifica del post')
  }
})

module.exports = router
