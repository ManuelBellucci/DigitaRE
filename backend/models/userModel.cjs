/* eslint-disable space-unary-ops */

// imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model
const uniqueValidator = require('mongoose-unique-validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../../config/config.cjs').secret

// definizione dello schema
const userSchema = new Schema({
  username: { type: String, required: [true, 'can\'t be blank'], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  hash: { type: String },
  salt: { type: String },
  roles: { type: Array, default: ['user'] }
}, { timestamps: true })

// plugin per validare i campi unici
userSchema.plugin(uniqueValidator, { message: 'is already taken.' })

// funzione per impostare la password dell'utente e generare il salt e l'hash
userSchema.methods.setPassword = function (password) {
  // genero il salt e l'hash
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

// funzione per validare la password
userSchema.methods.validatePassword = function (password) {
  // calcolo l'hash della password inserita dall'utente
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash === hash
}

// funzione per generare il token di autenticazione
userSchema.methods.generateJWT = function () {
  // imposto la data di scadenza del token a 60 giorni
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  // genero il token
  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, secret)
}

// funzione per generare l'oggetto JSON da ritornare al client
userSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    token: this.generateJWT()
  }
}

// definizione del modello
const User = model('User', userSchema)

module.exports = User
