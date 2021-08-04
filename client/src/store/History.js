import Observable from '@lib/Observable';
import api from '@utils/api';
import { makeObjectKeysLowerCase } from '@utils/helper';
import DateInfo from './DateInfo';

const getCurrentMonthHistory = async () => {
  const { year, month } = DateInfo.state.current;
  try {
    const data = await api.fetchMonthHistories(year, month);
    return data;
  } catch (err) {
    return null;
  }
};

class History extends Observable {
  init() {
    this.state.history = {};
    this.state.total = { income: 0, expenses: 0, earning: 0 };
  }

  async setCurrentMonthHistory() {
    this.init();

    const data = await getCurrentMonthHistory();
    const history = data.reduce((acc, cur) => {
      const date = new Date(cur.date).getDate();
      const amount = parseInt(cur.amount, 10);
      if (!acc[date]) acc[date] = { income: 0, expenses: 0, earning: 0 };
      if (amount > 0) acc[date].income += amount;
      else acc[date].expenses += amount;
      acc[date].earning += amount;
      return acc;
    }, {});
    this.state.historyArr = data.map(makeObjectKeysLowerCase);
    this.state.history = history;
    this.setHistoryTotal(history);
  }

  setHistoryTotal(data) {
    if (!data) return;

    const dataArr = Object.values(data);
    this.state.total = {
      income: dataArr.reduce((acc, cur) => acc + cur.income, 0),
      expenses: dataArr.reduce((acc, cur) => acc + -cur.expenses, 0),
      earning: dataArr.reduce((acc, cur) => acc + cur.earning, 0),
    };
  }

  setFilter(filter) {
    this.state.filter = filter;
  }

  async addHistory({ date, content, amount, categoryId, paymentId, userId }) {
    try {
      const newHistory = await api.postHistory({
        date,
        content,
        amount,
        categoryId,
        paymentId,
        userId,
      });
      this.state.history = [...this.state.history, newHistory].map(
        makeObjectKeysLowerCase,
      );
    } catch (e) {
      console.log(e);
    }
  }

  async deleteHistory(id) {
    try {
      await api.deleteHistory(id);
      this.state.historyArr = this.state.historyArr.filter(h => h.id !== +id);
    } catch (e) {
      console.log(e);
    }
  }

  async updateHistory(id, body) {
    try {
      const updatedHistory = await api.updateHistory(id, body);
      const idx = this.state.historyArr.findIndex(
        h => h.id === updatedHistory.id,
      );
      this.state.historyArr.splice(idx, 1, updatedHistory);
      this.state.historyArr = this.state.historyArr.map(
        makeObjectKeysLowerCase,
      );
    } catch (e) {
      console.log(e);
    }
  }

  async setCategories() {
    try {
      const categories = await api.getCategories();
      this.state.categories = categories;
    } catch (e) {
      console.log(e);
    }
  }
}

const initialState = {
  categories: [],
  historyArr: [],
  history: {},
  total: {
    income: 0,
    expenses: 0,
    earning: 0,
  },
  filter: ['income', 'expenditure'],
};

export default new History(initialState);
