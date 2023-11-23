const secret = require('../../config/config.cjs').secret
exports.secret = secret
const User = require('../models/userModel.cjs')
const { validatePassword } = require('./validatePassword.cjs')
const { generateToken } = require('./generateToken.cjs')

async function login (req, res) {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })

    if (user) {
      const isPasswordMatch = validatePassword(password, user.salt, user.hash)

      if (isPasswordMatch) {
        const token = generateToken(user)
        res.json({ success: true, token })
      } else {
        res.json({ success: false, message: 'Incorrect username or password' })
      }
    } else {
      res.json({ success: false, message: 'User not found' })
    }
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

module.exports = { login }
