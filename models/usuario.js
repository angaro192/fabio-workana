const Sequelize = require('sequelize')
const sequelize = require('../db.js')

const schema = 'arfasystems'

class Usuarios extends Sequelize.Model {}
Usuarios.init({
    usuario: Sequelize.STRING,
    senha: Sequelize.STRING,
    ck: Sequelize.STRING,
    cs: Sequelize.STRING
},{
    sequelize,
    modelName: 'usuarios',
    schema
})

//sequelize.sync();
module.exports = Usuarios;