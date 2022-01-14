"use strict";// seeds serve parea inserir dados na bd para testes basicamete
// cria seed npx sequelize seed:generate --name Usuários-criados
// comands npx sequelize db:seed:all
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John leitãos',
        email: 'luizmarcosssss@gmail.com',
        password_hash: await bcrypt.hash('kjsadhhsak', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doefa',
        email: 'luizmarcosss@gmail.com',
        password_hash: await bcrypt.hash('kjsadhhsak', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  down: async () => {

  },
};
