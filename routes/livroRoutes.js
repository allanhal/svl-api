const express = require('express')
const LivroController = require('../controllers/LivroController')

const routes = express.Router()

routes
.get('/books', LivroController.findAll)
.post('/book', LivroController.createBook)
.get('/book/:id', LivroController.getBookById)


module.exports = routes