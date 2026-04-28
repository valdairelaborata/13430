const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const produtoSchema = new mongoose.Schema({
  codigo: { type: String, required: [true, 'Código é obrigatório'], unique: true },
  nome: { type: String, required: true }
}); 

module.exports = mongoose.model('Produto', produtoSchema);