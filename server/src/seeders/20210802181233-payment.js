module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('payment', [
      { id: 1, name: '현금' },
      { id: 2, name: '현대카드' },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('payment', null, {});
  },
};
