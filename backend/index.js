// imports
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const postRouter = require('./routes/posts')

// inizializzazione dell'app
const app = express()
const PORT = process.env.PORT || 3001

// collegamento al database MongoDB
mongoose.connect(
  'mongodb+srv://manuelbellucci:Manu.2002@digitare.jhsk8u2.mongodb.net/?retryWrites=true&w=majority'
)
const db = mongoose.connection

// gestione errori di connessione al database
db.on(
  'error',
  console.error.bind(console, 'connection error:')
)
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

// route per i post
app.use('/api/posts', postRouter)

// server in ascolto
app.listen(PORT, () => {
  console.log(`App in ascolto nel porto ${PORT}!`)
})
