/* eslint-disable space-unary-ops */
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const User = require('../models/userModel.cjs')

const handleErrors = (res, error, message) => {
  console.error(`Errore: ${message}`, error)
  res.status(500).json({ error: message, details: error.message })
}

// Ottenere tutti gli utenti
router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    handleErrors(res, error, 'Recupero degli utenti')
  }
})

// Creare un nuovo utente
router.post('/', [
  body('username').notEmpty().withMessage('Il campo username è obbligatorio'),
  body('password').notEmpty().withMessage('Il campo password è obbligatorio'),
  body('roles').isArray().withMessage('Il campo roles deve essere un array')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { username, password, roles } = req.body

    const allowedRoles = ['user', 'admin']
    const validatedRoles = roles.filter(role => allowedRoles.includes(role))

    const user = new User({ username, password, roles: validatedRoles }) // Set the password directly
    user.setPassword(password) // Still set the hash and salt for backward compatibility
    const savedUser = await user.save()

    res.json(savedUser)
  } catch (error) {
    handleErrors(res, error, 'Creazione dell\'utente')
  }
})

// eliminare un utente
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).json({ error: 'Il parametro id è obbligatorio' })
    }
    await User.findByIdAndDelete(id)
    res.json({ message: `L'utente con id ${id} è stato eliminato` })
  } catch (error) {
    handleErrors(res, error, 'Eliminazione dell\'utente')
  }
})

module.exports = router
