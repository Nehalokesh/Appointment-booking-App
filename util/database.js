const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment', 'root', 'NaVyA@1997', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;