import Observable from '@lib/Observable';
import DateInfo from './DateInfo';

class History extends Observable {
  getCurrentMonthHistory() {
    console.log(DateInfo.state.current);
    this.state.history = [
      {
        date: 2,
        income: 0,
        expenses: 5400,
        earning: -5400,
      },
      {
        date: 4,
        income: 0,
        expenses: 132000,
        earning: -132000,
      },
      {
        date: 7,
        income: 0,
        expenses: 65900,
        earning: -65900,
      },
      {
        date: 9,
        income: 1822480,
        expenses: 9500,
        earning: 1812980,
      },
      {
        date: 10,
        income: 0,
        expenses: 519140,
        earning: -519140,
      },
      {
        date: 13,
        income: 0,
        expenses: 10000,
        earning: -10000,
      },
      {
        date: 15,
        income: 0,
        expenses: 56240,
        earning: -56240,
      },
      {
        date: 18,
        income: 0,
        expenses: 36460,
        earning: -36460,
      },
    ];
  }

  getCurrentMonthTotal() {
    this.state.total = {
      income: 1822480,
      expenses: 834640,
      earning: 987840,
    };
  }
}

const initialState = {
  history: [],
  total: {},
};

export default new History(initialState);
