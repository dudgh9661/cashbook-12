import Observable from '@lib/Observable';
import api from '@utils/api';
import DateInfo from './DateInfo';

const getCategoryHistory = async () => {
  const { year, month } = DateInfo.state.current;

  try {
    const data = await api.fetchCategoryHistories(year, month);
    return data.reduce((acc, cur) => {
      const { id, name, color } = cur.Category;
      return acc.concat({
        id,
        label: name,
        color,
        value: -parseInt(cur.total_expenses, 10),
      });
    }, []);
  } catch (err) {
    return null;
  }
};

class HistoryReport extends Observable {
  init() {
    this.state.curMonthReport = {
      total: 0,
      category: [],
    };
  }

  async setExpenseReport() {
    this.init();

    const data = await getCategoryHistory();
    this.state.curMonthReport = {
      total: data.reduce((acc, cur) => acc + cur.value, 0),
      category: data,
    };
  }
}

const initialState = {
  curMonthReport: {
    total: 0,
    category: [],
  },
};

export default new HistoryReport(initialState);
