/* eslint-disable space-unary-ops */
const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel.cjs')

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET one contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    res.json(contact)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST create new contact
router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone
  })
  try {
    const newContact = await contact.save()
    res.status(201).json(newContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
