/* eslint-disable space-unary-ops */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const contactSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String },
  phone: { type: String }
})

const Contact = model('Contact', contactSchema)

module.exports = Contact
