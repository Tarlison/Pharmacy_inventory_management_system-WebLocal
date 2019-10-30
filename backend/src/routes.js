const express = require('express');

const ProdutoController = require('./controllers/ProdutoController');
const FornecedorController = require('./controllers/FornecedoresController');

const routes = express.Router();

routes.get('/produtos', ProdutoController.index);
routes.get('/fornecedores', FornecedorController.index);

routes.post('/produtos', ProdutoController.store);
routes.post('/fornecedores', FornecedorController.store);

routes.delete('/produtos/:id', ProdutoController.delete);
routes.put('/produtos/:id', ProdutoController.put);
module.exports = routes;