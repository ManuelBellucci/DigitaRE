const crypto = require('crypto')

function validatePassword (password, salt, storedHash) {
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
  return storedHash === hash
}
exports.validatePassword = validatePassword
