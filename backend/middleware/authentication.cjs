const jwt = require('jsonwebtoken')
const secret = require('../../config/config.cjs').secret

function verifyToken (req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return res.status(403).json({ success: false, message: 'Unauthorized: No token provided' })
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' })
    }

    req.user = decoded
    next()
  })
}

module.exports = { verifyToken }
