const Sequelize = require('sequelize')
const sequelize = new Sequelize('arfasystem', 'arfasystem', 'Au94085193', {
    host: 'mysql873.umbler.com',
    port: 41890,
    dialect: 'mysql'
})

module.exports = sequelize