const express = require('express')
const routes = express.Router()

const UsuariosController = require('./controller/usuariosController')

routes.post('/usuarios', UsuariosController.list)
routes.post('/cad', UsuariosController.create)

module.exports = routes;