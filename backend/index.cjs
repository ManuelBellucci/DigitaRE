// imports
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const postRouter = require('./routes/posts.cjs')
const userRouter = require('./routes/users.cjs')
const contactRouter = require('./routes/contacts.cjs')
const { verifyToken } = require('./middleware/authentication.cjs')
const { login } = require('./controllers/authController.cjs')
require('dotenv').config()

// inizializzazione dell'app
const app = express()
const PORT = process.env.PORT || 3001

// collegamento al database MongoDB
mongoose.connect(
  process.env.MONGODB_URI
)
const db = mongoose.connection

// gestione errori di connessione al database
db.on('error', console.error.bind(console, 'connection error:'))

// gestione connessione al database
db.once('open', () => {
  console.log('Database connected')
})

// middleware
app.use(cors())
app.use(express.json())

// route di base
app.get('/', (req, res) => {
  res.send('Digitare API!')
})
app.get('/api/admin', verifyToken, (req, res) => {
  res.json({ success: true, message: 'This is a protected route' })
})

// route per i post
app.use('/api/posts', postRouter)

// route per gli utenti
app.use('/api/users', userRouter)

// route per l'autenticazione
app.post('/api/login', login)

// route per i contatti
app.use('/api/contacts', contactRouter)

// server in ascolto
app.listen(PORT, () => {
  console.log(`App in ascolto nel porto ${PORT}!`)
})
