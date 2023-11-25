/* eslint-disable space-unary-ops */

// imports
const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel.cjs')

// GET | recupero tutti i contatti
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET | recupero un contatto
router.get('/:id', async (req, res) => {
  // recupero il contatto con l'id specificato
  try {
    const contact = await Contact.findById(req.params.id)
    res.json(contact)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST | creare un nuovo contatto
router.post('/', async (req, res) => {
  // creo un nuovo contatto con i dati ricevuti dalla richiesta
  const contact = new Contact({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone
  })
  // salvo il contatto nel database
  try {
    const newContact = await contact.save()
    res.status(201).json(newContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
