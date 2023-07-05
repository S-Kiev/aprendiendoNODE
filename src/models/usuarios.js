const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const UsuarioShema = new Shema({
    nombre : String,
    edad : Number
});

const Usuario = mongoose.model('Usuario', UsuarioShema);

module.exports = Usuario;