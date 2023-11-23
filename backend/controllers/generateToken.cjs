const jwt = require('jsonwebtoken')
const { secret } = require('./authController.cjs')

function generateToken (user) {
  return jwt.sign({ userId: user._id, username: user.username }, secret, { expiresIn: '1h' })
}
exports.generateToken = generateToken
