const Sequelize = require('sequelize'); //chamando a classe sequelize;
const dbConfig = require('../config/database'); // pegando a configuração do database;
const Produto = require('../models/Produto');

const connection = new Sequelize(dbConfig);

Produto.init(connection);


module.exports = connection;
