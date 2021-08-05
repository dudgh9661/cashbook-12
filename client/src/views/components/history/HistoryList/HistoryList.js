import Component from '@lib/Component';
import { HistoryItem, Empty } from '@components';
import History from '@store/History';
import HistoryReport from '@store/HistoryReport';
import { dateFormat } from '@utils/helper';
import $ from '@utils/dom';
import './HistoryList.scss';

const isIncomeFilter = history => {
  if (
    (History.state.filter.includes('expenditure') && history.amount < 0) ||
    (History.state.filter.includes('income') && history.amount > 0)
  ) {
    return true;
  }
  return false;
};

class HistoryList extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  setObserver() {
    History.observe('filter', this.reRender.bind(this));
    History.observe('historyArr', this.reRender.bind(this));
    if (this.props.type === 'simple') {
      HistoryReport.observe('curCategoryReport', this.reRender.bind(this));
    }
  }

  filterCategory(history) {
    if (this.props.type === 'simple') {
      return (
        history.category.name ===
        HistoryReport.state.curCategoryReport.categoryName
      );
    }
    return true;
  }

  historyFilter(history) {
    return isIncomeFilter(history) && this.filterCategory(history);
  }

  render() {
    if (
      this.props.type === 'simple' &&
      !HistoryReport.state.curCategoryReport
    ) {
      return $('div');
    }
    const historyByDate = {};
    const filteredHistoryList = History.state.historyArr.filter(
      this.historyFilter.bind(this),
    );

    if (!filteredHistoryList.length) {
      return new Empty().getElement();
    }

    filteredHistoryList.forEach(h => {
      const date = dateFormat(h.date);
      if (!historyByDate[date]) {
        historyByDate[date] = [];
      }
      historyByDate[date].push(h);
    });

    const historyItemList = Object.entries(historyByDate).map(
      ([date, list]) =>
        new HistoryItem({
          type: this.props.type,
          timestamp: date,
          historyItemList: list,
        }),
    );

    return $('div', {}, ...historyItemList);
  }

  didMount() {
    History.setCurrentMonthHistory();
  }
}

export default HistoryList;
