import Component from '@lib/Component';
import { HistoryItem, Empty } from '@components';
import History from '@store/History';
import { dateFormat } from '@utils/helper';
import $ from '@utils/dom';
import './HistoryList.scss';

const filter = history => {
  if (
    (History.state.filter.includes('expenditure') && history.amount < 0) ||
    (History.state.filter.includes('income') && history.amount > 0)
  ) {
    return true;
  }
  return false;
};

class HistoryList extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    History.observe('filter', this.reRender.bind(this));
    History.observe('historyArr', this.reRender.bind(this));
  }

  render() {
    const historyByDate = {};
    const filteredHistoryList = History.state.historyArr.filter(filter);

    if (!filteredHistoryList.length) {
      return new Empty().getElement();
    }

    filteredHistoryList.filter(filter).forEach(h => {
      const date = dateFormat(h.date);
      if (!historyByDate[date]) {
        historyByDate[date] = [];
      }
      historyByDate[date].push(h);
    });

    const historyItemList = Object.entries(historyByDate).map(
      ([date, list]) =>
        new HistoryItem({
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
