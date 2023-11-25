// imports
const secret = require('../../config/config.cjs').secret
exports.secret = secret
const User = require('../models/userModel.cjs')
const { validatePassword } = require('./validatePassword.cjs')
const { generateToken } = require('./generateToken.cjs')

// funzione per gestire il processo di login
async function login (req, res) {
  // estrazione di username e password dalla request
  const { username, password } = req.body

  try {
    // cerca l'utente nel db in base all'username
    const user = await User.findOne({ username })

    if (user) {
      // verifica se la password fornita corrisponde a quella nel database
      const isPasswordMatch = validatePassword(password, user.salt, user.hash)

      if (isPasswordMatch) {
        // genera un token di autenticazione valido
        const token = generateToken(user)
        res.json({ success: true, token })
      } else {
        // se la password non corrisponde, restituisci un messaggio di errore
        res.json({ success: false, message: 'Incorrect username or password' })
      }
    } else {
      // se l'utente non è trovato, restituisci un messaggio di errore
      res.json({ success: false, message: 'User not found' })
    }
  } catch (error) {
    // error handling
    console.error('Error during login:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

module.exports = { login }
