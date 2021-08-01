import Observable from '@lib/Observable';
import DateInfo from './DateInfo';
import historyData from '../_dummies/history.json';

class History extends Observable {
  getCurrentMonthHistory() {
    const { year, month } = DateInfo.state.current;
    const dataName = `data-${year}-${month}`;

    this.state.history = historyData[dataName];
  }

  getCurrentMonthTotal() {
    const { year, month } = DateInfo.state.current;
    const data = historyData[`data-${year}-${month}`];

    this.state.total = {
      income: data ? data.reduce((acc, cur) => acc + cur.income, 0) : 0,
      expenses: data ? data.reduce((acc, cur) => acc + cur.expenses, 0) : 0,
      earning: data ? data.reduce((acc, cur) => acc + cur.earning, 0) : 0,
    };
  }
}

const initialState = {
  history: [],
  total: {},
};

export default new History(initialState);
