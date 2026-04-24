const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  nome: { type: String, required: true }
}); 

module.exports = mongoose.model('Produto', produtoSchema);