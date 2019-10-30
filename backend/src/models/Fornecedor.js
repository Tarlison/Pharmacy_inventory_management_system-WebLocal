const { Model, DataTypes } = require('sequelize');

class Fornecedores extends Model {
    static init(sequelize) { //sequelize
        super.init({
            nome: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Fornecedores;