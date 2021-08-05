import Observable from '@lib/Observable';
import api from '@utils/api';
import DateInfo from './DateInfo';

const getMonthExpenses = async () => {
  const { year, month } = DateInfo.state.current;

  try {
    const data = await api.fetchMonthExpensesReport(year, month);
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

const getCategoryExpenses = async categoryId => {
  const { year, month } = DateInfo.state.current;

  try {
    const data = await api.fetchCategoryExpensesReport(categoryId, year);
    const result = new Array(month).fill(0);
    data.forEach(d => {
      if (d.month <= month) result[d.month - 1] = -d.total_expenses;
    });
    return result;
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
    this.state.curCategoryReport = null;
  }

  async setMonthReport() {
    this.init();

    const data = await getMonthExpenses();
    if (!data) return;
    this.state.curMonthReport = {
      total: data.reduce((acc, cur) => acc + cur.value, 0),
      category: data,
    };
  }

  async setCategoryReport(categoryInfo) {
    const { id, name } = categoryInfo;
    const data = await getCategoryExpenses(id);
    this.state.curCategoryReport = {
      categoryName: name,
      data,
    };
  }
}

const initialState = {
  curMonthReport: {
    total: 0,
    category: [],
  },
  curCategoryReport: null,
};

export default new HistoryReport(initialState);
