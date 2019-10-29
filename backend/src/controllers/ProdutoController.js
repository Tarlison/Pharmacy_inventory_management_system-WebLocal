const Produto = require('../models/Produto');

module.exports = {
    async index(req, res) {
        const produtos = await Produto.findAll();

        return res.json(produtos);
    },

    async store(req, res) {

        const { nome, desc, preco, quantidade, nome_fornecedor } = req.body;

        const produto = await Produto.create({
            nome: nome,
            desc: desc,
            preco: preco,
            quantidade: quantidade,
            nome_fornecedor: nome_fornecedor
        });

        return res.json(produto);
    },

    async delete(req, res) {
        const { id } = req.params;
        // const { nome } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ error: 'Product not found ' });
        }

        await Produto.destroy({
            where: { id }
        })

        return res.json();

    }

}