module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('category', [
      {
        id: 1,
        name: '생활',
        value: 'life',
        color: '#4A6CC3',
      },
      {
        id: 2,
        name: '식비',
        value: 'food',
        color: '#4CA1DE',
      },
      {
        id: 3,
        name: '교통',
        value: 'transportation',
        color: '#94D3CC',
      },
      {
        id: 4,
        name: '쇼핑/뷰티',
        value: 'beauty',
        color: '#4CB8B8',
      },
      {
        id: 5,
        name: '의료/건강',
        value: 'healthy',
        color: '#6ED5EB',
      },
      {
        id: 6,
        name: '문화/여가',
        value: 'culture',
        color: '#D092E2',
      },
      {
        id: 7,
        name: '미분류',
        value: 'unclassified',
        color: '#817DCE',
      },
      {
        id: 8,
        name: '월급',
        value: 'salary',
        color: '#B9D58C',
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  },
};
