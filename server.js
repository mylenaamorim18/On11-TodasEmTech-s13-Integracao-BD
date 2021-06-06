const express = require('express')

const app = express()
const db = require('./src/database/filmesData')
db.connect()

app.use(express.json())

const livrosRouter = require('./src/routes/filmesRoute')
app.use('/filmes',livrosRouter)

app.listen(3333, ()=> console.log('Servidor rodando'))