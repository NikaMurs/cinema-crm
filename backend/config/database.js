const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cinema', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
