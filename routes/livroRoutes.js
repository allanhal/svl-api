const express = require('express')
const LivroController = require('../controllers/LivroController')

const routes = express.Router()

routes
.get('/books', LivroController.findAll)
.get('/books/:id', LivroController.findById)


module.exports = routes