module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('user', [
      { id: 1, name: 'admin' },
      { id: 2, name: 'tester' },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
