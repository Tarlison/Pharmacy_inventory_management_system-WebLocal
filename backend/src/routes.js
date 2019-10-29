const express = require('express');

const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);
routes.delete('/produtos/:id', ProdutoController.delete);
module.exports = routes;