// imports
const jwt = require('jsonwebtoken')
const secret = require('../../config/config.cjs').secret

// funzione per verificare il token di autenticazione
function verifyToken (req, res, next) {
  // recupero il token dalla richiesta
  const token = req.headers.authorization
  // se il token non è presente nella richiesta, ritorno un errore
  if (!token) {
    return res.status(403).json({ success: false, message: 'Unauthorized: No token provided' })
  }
  // verifico il token e se è valido lo decodifico, altrimenti ritorno un errore
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' })
    }
    req.user = decoded
    next()
  })
}

module.exports = { verifyToken }
