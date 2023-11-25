// imports
const jwt = require('jsonwebtoken')
const { secret } = require('./authController.cjs')

// funzione per generare un token JWT basato sulle informazioni dell'utente
function generateToken (user) {
  // Crea e restituisce un token firmato con l'ID dell'utente e il nome utente, utilizzando la chiave segreta e impostando la scadenza a 1 ora
  return jwt.sign({ userId: user._id, username: user.username }, secret, { expiresIn: '1h' })
}

exports.generateToken = generateToken
