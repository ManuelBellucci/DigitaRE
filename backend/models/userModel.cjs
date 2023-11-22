/* eslint-disable space-unary-ops */

// imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model
const uniqueValidator = require('mongoose-unique-validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../../config/config.cjs').secret

// schema
const userSchema = new Schema({
  username: { type: String, required: [true, 'can\'t be blank'], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  hash: { type: String },
  salt: { type: String },
  roles: { type: Array, default: ['user'] }
}, { timestamps: true })

// unique validator
userSchema.plugin(uniqueValidator, { message: 'is already taken.' })

// password hash
userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

// password validation
userSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash === hash
}

// generate JWT
userSchema.methods.generateJWT = function () {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, secret)
}

// toAuthJSON
userSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    token: this.generateJWT()
  }
}

// model
const User = model('User', userSchema)

module.exports = User
