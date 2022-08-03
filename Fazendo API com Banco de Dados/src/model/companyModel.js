const mongoose = require ('mongoose');

const companySchema = new mongoose.Schema({
    // loginUsuario: String,
    // senhaEncripitada: String,
   
    razaoSocial:{
        type: String,
        required: true
    },

    cnpj: {
        type: String,
        required: true
    },
    telefoneComercial: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    blocoSala: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    senhaEncripitada: {
        type: String,
        required: false // lembrar de fazer ou schema para fazer o login da compania 
    },
    nomeCompleto: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    salt : String


})

module.exports = mongoose.model('users',companySchema);
