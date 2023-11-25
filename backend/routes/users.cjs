/* eslint-disable space-unary-ops */

// imports
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const User = require('../models/userModel.cjs')

// funzione per gestire gli errori
const handleErrors = (res, error, message) => {
  console.error(`Errore: ${message}`, error)
  res.status(500).json({ error: message, details: error.message })
}

// GET | recupero tutti gli utenti
router.get('/', async (req, res) => {
  // recupero tutti gli utenti dal database e li ritorno, altrimenti ritorno un errore
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    handleErrors(res, error, 'Recupero degli utenti')
  }
})

// POST | creare un nuovo utente
router.post('/', [
  // validazione dei campi
  body('username').notEmpty().withMessage('Il campo username è obbligatorio'),
  body('password').notEmpty().withMessage('Il campo password è obbligatorio'),
  body('roles').isArray().withMessage('Il campo roles deve essere un array')
], async (req, res) => {
  try {
    // controllo che non ci siano errori di validazione
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // ottengo i dati dalla richiesta
    const { username, password, roles } = req.body

    // definisco i ruoli consentiti e verifico che i ruoli passati siano tra quelli consentiti
    const allowedRoles = ['user', 'admin']
    const validatedRoles = roles.filter(role => allowedRoles.includes(role))

    // creo l'utente e lo salvo nel database se non ci sono errori, altrimenti ritorno un errore
    const user = new User({ username, password, roles: validatedRoles })
    user.setPassword(password)
    const savedUser = await user.save()

    res.json(savedUser)
  } catch (error) {
    handleErrors(res, error, 'Creazione dell\'utente')
  }
})

// DELETE | eliminare un utente in base all'id
router.delete('/:id', async (req, res) => {
  try {
    // recupero l'id dell'utente da eliminare
    const id = req.params.id

    // controllo che l'id sia presente, altrimenti ritorno un errore
    if (!id) {
      return res.status(400).json({ error: 'Il parametro id è obbligatorio' })
    }

    // elimino l'utente dal database e ritorno un messaggio di successo, altrimenti ritorno un errore
    await User.findByIdAndDelete(id)
    res.json({ message: `L'utente con id ${id} è stato eliminato` })
  } catch (error) {
    handleErrors(res, error, 'Eliminazione dell\'utente')
  }
})

module.exports = router
