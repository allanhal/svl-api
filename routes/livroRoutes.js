const express = require('express')
const LivroController = require('../controllers/LivroController')

const routes = express.Router()

routes.get('/books', LivroController.findAllBooks)

module.exports = routes