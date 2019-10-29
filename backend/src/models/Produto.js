const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) { //sequelize
        super.init({
            nome: DataTypes.STRING,
            desc: DataTypes.STRING,
            preco: DataTypes.FLOAT,
            quantidade: DataTypes.INTEGER,
            nome_fornecedor: DataTypes.STRING,
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Produto;