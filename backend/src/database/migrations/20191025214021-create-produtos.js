'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        desc: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        preco: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },

        quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        nome_fornecedor: {
          type: Sequelize.STRING,
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
    return queryInterface.dropTable('produtos');
  }
};
