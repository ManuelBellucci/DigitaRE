/* eslint-disable space-unary-ops */

// imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

// definizione dello schema
const contactSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String },
  phone: { type: String }
})

// definizione del modello
const Contact = model('Contact', contactSchema)

module.exports = Contact
