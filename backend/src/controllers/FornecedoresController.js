const Fornecedor = require('../models/Fornecedor');

module.exports = {
    async index(req, res) {
        const fornecedor = await Fornecedor.findAll();

        //console.log("produtoController_TAG: "+JSON.stringify(produtos));
        return res.json(fornecedor);
    },

    async store(req, res) {

        const { nome,  cnpj } = req.body;

       // console.log(req.body);

        const fornecedor = await Fornecedor.create({
            nome: nome,
            cnpj: cnpj
        });

        return res.json(fornecedor);
    }
}