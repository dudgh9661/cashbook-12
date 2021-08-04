import Observable from '@lib/Observable';
import { makeObjectKeysLowerCase } from '@utils/helper';
import DateInfo from './DateInfo';
import Api from '../utils/api';

const getCurrentMonthHistory = async () => {
  const { year, month } = DateInfo.state.current;

  const histories = await Api.fetchHistory(year, month);
  return histories;
};

class History extends Observable {
  async setCurrentMonthHistory() {
    try {
      const histories = await getCurrentMonthHistory();

      this.state.history = histories.map(makeObjectKeysLowerCase);
    } catch (e) {
      console.log(e);
    }
  }

  setCurrentMonthTotal() {
    const data = getCurrentMonthHistory();

    this.state.total = {
      income: data ? data.reduce((acc, cur) => acc + cur.income, 0) : 0,
      expenses: data ? data.reduce((acc, cur) => acc + cur.expenses, 0) : 0,
      earning: data ? data.reduce((acc, cur) => acc + cur.earning, 0) : 0,
    };
  }

  async addHistory({ date, content, amount, categoryId, paymentId, userId }) {
    try {
      const newHistory = await Api.postHistory({
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

  setFilter(filter) {
    this.state.filter = filter;
  }
}

const initialState = {
  filter: ['income', 'expenditure'],
  history: [],
  total: {},
};

export default new History(initialState);
