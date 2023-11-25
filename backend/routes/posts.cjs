/* eslint-disable space-unary-ops */

// imports
const express = require('express')
const router = express.Router()
const Post = require('../models/postModel.cjs')

// funzione per gestire gli errori
const handleErrors = (res, error, message) => {
  console.error(`Errore: ${message}`, error)
  res.status(500).json({ error: message, details: error.message })
}

// GET | recupero tutti i post
router.get('/', async (req, res) => {
  // recupero tutti i post dal database
  try {
    // se è presente il parametro title nella query, filtro i post per titolo
    const title = req.query.title
    const titleQuery = title ? { title: { $regex: title, $options: 'i' } } : {}
    // se è presente il parametro tag nella query, filtro i post per tag
    const tag = req.query.tag
    const tagQuery = tag ? { tag: { $regex: tag, $options: 'i' } } : {}

    // recupero i post dal database
    const posts = await Post.find(titleQuery, tagQuery)
    res.json(posts)
  } catch (error) {
    handleErrors(res, error, 'Recupero dei post')
  }
})

// POST | creare un nuovo post
router.post('/', async (req, res) => {
  // creo un nuovo post con i dati ricevuti dalla richiesta
  try {
    const { title, body, date, tag, cover, readTime } = req.body
    // controllo che i parametri title e body siano presenti altrimenti ritorno un errore
    if (!title || !body) {
      return res.status(400).json({ error: 'I parametri title e body sono obbligatori' })
    }
    // decodifico il body
    const decodedBody = decodeURIComponent(body)

    // creo lo slug del post a partire dal titolo
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .replace(/-{2,}/g, '')
      .trim()

    // creo il post e lo salvo nel database
    const post = new Post({ title, body: decodedBody, date, tag, cover, readTime, slug })
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (error) {
    handleErrors(res, error, 'Creazione del post')
  }
})

// GET | recupero un post specifico utilizzando lo slug
router.get('/:slug', async (req, res) => {
  // recupero il post con lo slug specificato
  const slug = req.params.slug

  // recupero il post dal database
  try {
    // recupero il post dal database utilizzando lo slug
    const post = await Post.findOne({ slug })

    // se il post non è presente nel database, ritorno un errore, altrimenti ritorno il post
    if (!post) {
      res.status(404).json({ error: `Il post con lo slug ${slug} non è stato trovato` })
    } else {
      res.json(post)
    }
  } catch (error) {
    handleErrors(res, error, 'Recupero del post')
  }
})

// DELETE | elimino un post specifico utilizzando lo slug
router.delete('/:slug', async (req, res) => {
  // salvo lo slug del post da eliminare
  const slug = req.params.slug

  try {
    // elimino il post dal database utilizzando lo slug
    const deletedPost = await Post.findOneAndDelete({ slug })

    // se il post non è presente nel database, ritorno un errore, altrimenti ritorno il post eliminato
    if (!deletedPost) {
      res.status(404).json({ error: `Il post con lo slug ${slug} non è stato trovato` })
    } else {
      res.json(deletedPost)
    }
  } catch (error) {
    handleErrors(res, error, 'Eliminazione del post')
  }
})

// PUT | modifico un post specifico utilizzando lo slug
router.put('/:slug', async (req, res) => {
  // salvo lo slug del post da modificare
  const slug = req.params.slug

  // recupero il post dal database
  try {
    // recupero i parametri del post dalla richiesta
    const { title, body, date, tag, cover, readTime } = req.body

    // controllo che i parametri title e body siano presenti altrimenti ritorno un errore
    if (!title || !body) {
      return res.status(400).json({ error: 'I parametri title e body sono obbligatori' })
    }

    // decodifico il body
    const decodedBody = decodeURIComponent(body)

    // modifico il post nel database utilizzando lo slug
    const updatedPost = await Post.findOneAndUpdate(
      { slug },
      { title, body: decodedBody, date, tag, cover, readTime },
      { new: true }
    )

    // se il post non è presente nel database, ritorno un errore, altrimenti ritorno il post modificato
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
