const Sequelize = require('sequelize'); //chamando a classe sequelize;
const dbConfig = require('../config/database'); // pegando a configuração do database;
const Produto = require('../models/Produto');
const Fornecedor = require('../models/Fornecedor');
const connection = new Sequelize(dbConfig);

Produto.init(connection);
Fornecedor.init(connection);

module.exports = connection;
