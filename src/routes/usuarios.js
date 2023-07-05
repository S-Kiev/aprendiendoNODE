const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios');

router.get('/todos', usuarioController.getUsuarios);

router.get('/crear', usuarioController.getCrearUsuario);

router.get('/modificar/:id', usuarioController.getModificarUsuario);

router.get('/eliminar/:id', usuarioController.getBorrarUsuario);

router.post('/crear', usuarioController.crearUsuario)

router.post('/modificar/:id', usuarioController.modificarUsuario)

router.post('/eliminar/:id', usuarioController.eliminarUsuario)

module.exports = router;
