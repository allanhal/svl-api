const express = require('express')
const app = express()
const port = 5000
const db = require('./config/db')

db.on('error', console.log.bind(console,'Erro ao conectar com o banco'))

db.once('open', ()=> {
  console.log('conexão realizada com sucesso')
})

app.get('/', (req, res) => {
  res.send('servidor online')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${5000}`)
})

