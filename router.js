const express = require('express')
const routes = express.Router()

const UsuariosController = require('./controller/usuariosController')
const ProdutosController = require('./controller/ProdutosController')

routes.post('/usuarios', UsuariosController.list)
routes.post('/cad', UsuariosController.create)

routes.post('/prod', ProdutosController.list)
routes.post('/cadprod', ProdutosController.create)

module.exports = routes;