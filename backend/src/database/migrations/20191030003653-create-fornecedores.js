'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fornecedores',
      {
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        cnpj: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fornecedores');
  }
};
