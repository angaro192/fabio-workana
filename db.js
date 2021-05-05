const Sequelize = require('sequelize')
const sequelize = new Sequelize('arfasystems', 'arfasystems', 'Au94085193', {
    host: 'mysql873.umbler.com',
    port: 41890,
    dialect: 'mysql'
})

module.exports = sequelize