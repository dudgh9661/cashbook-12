module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('user', [
      { name: 'tester1' },
      { name: 'tester2' },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
