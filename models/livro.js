const mongoose = require('mongoose')


// criar o esuqema da collection no mongo 
const livroSchema = new mongoose.Schema({
    _id: { tipe: String },
    titulo: { type: String, required: true },
    ano: { type: Number, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number, required: true },
    favorito: { type: Boolean, required: true }
});


//se a collection não for criada no atlas nesse momento ela será criada
const livros = mongoose.model('livros', livroSchema);

module.exports = livros;

