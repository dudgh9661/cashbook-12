import Observable from '@lib/Observable';
import api from '@utils/api';
import DateInfo from './DateInfo';

const getCurrentMonthHistory = async () => {
  const { year, month } = DateInfo.state.current;

  try {
    const data = await api.fetchMonthHistories(year, month);
    return data.reduce((acc, cur) => {
      const date = new Date(cur.date).getDate();
      const amount = parseInt(cur.amount, 10);

      if (!acc[date]) acc[date] = { income: 0, expenses: 0, earning: 0 };

      if (amount > 0) acc[date].income += amount;
      else acc[date].expenses += amount;
      acc[date].earning += amount;

      return acc;
    }, {});
  } catch (err) {
    return null;
  }
};

class History extends Observable {
  async setCurrentMonthHistory() {
    this.state.history = {};
    const data = await getCurrentMonthHistory();
    this.state.history = data;
  }

  async setCurrentMonthTotal() {
    const data = await getCurrentMonthHistory();
    const dataArr = Object.values(data);

    this.state.total = {
      income: dataArr.reduce((acc, cur) => acc + cur.income, 0),
      expenses: dataArr.reduce((acc, cur) => acc + -cur.expenses, 0),
      earning: dataArr.reduce((acc, cur) => acc + cur.earning, 0),
    };
  }
}

const initialState = {
  history: [],
  total: {
    income: 0,
    expenses: 0,
    earning: 0,
  },
};

export default new History(initialState);
