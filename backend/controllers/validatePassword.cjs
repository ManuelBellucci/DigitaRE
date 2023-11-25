// imports
const crypto = require('crypto')

// funzione per validare la password
function validatePassword (password, salt, storedHash) {
  // calcolo l'hash della password inserita dall'utente
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
  // ritorno true se l'hash calcolato corrisponde a quello salvato nel database
  return storedHash === hash
}
exports.validatePassword = validatePassword
