module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('payment', [
      { name: '현금' },
      { name: '신용카드' },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('payment', null, {});
  },
};
