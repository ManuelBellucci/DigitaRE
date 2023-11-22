const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../../config/config.cjs').secret
const User = require('../models/userModel.cjs')

function validatePassword (password, salt, storedHash) {
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
  return storedHash === hash
}

function generateToken (user) {
  return jwt.sign({ userId: user._id, username: user.username }, secret, { expiresIn: '1h' })
}

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
