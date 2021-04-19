const Sequelize = require('sequelize')
const sequelize = require('../db.js')

const schema = 'arfasystems'

class Produtos extends Sequelize.Model {}
Produtos.init({
    name: Sequelize.STRING,
    price: Sequelize.STRING,
    custo: Sequelize.STRING
},{
    sequelize,
    modelName: 'produtos',
    schema
})

//sequelize.sync();
module.exports = Produtos;