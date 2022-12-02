const mongoose = require('mongoose');

//ir no mongoatlas em data bases, connect/ opção MongoDBdrivers, copiar a string 
mongoose.connect ('mongodb+srv://svl01:svl01@svl-db.i6ddcxs.mongodb.net/svl');

// a variavél db recebe a conexão do banco e vamos exporta-la
let db = mongoose.connection

//exporta a conexão com o mongo (Atlas ou local, dependendo da string de conexão)
module.exports = db



