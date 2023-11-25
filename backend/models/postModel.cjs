/* eslint-disable space-unary-ops */

// imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

// definizione dello schema
const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tag: { type: String, default: 'generic' },
  cover: { type: String },
  readTime: {
    value: { type: Number },
    unit: { type: String }
  },
  isFeatured: { type: Boolean, default: false },
  slug: { type: String, required: true, unique: true }

})

// definizione del modello
const Post = model('Post', postSchema)

module.exports = Post
