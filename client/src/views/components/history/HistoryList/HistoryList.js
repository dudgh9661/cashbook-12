import Component from '@lib/Component';
import { HistoryItem } from '@components';
import historyList from '../../../../_dummies/historyList.json';
import './HistoryList.scss';

class HistoryList extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const historyItemList = Object.entries(historyList).map(([date, list]) =>
      new HistoryItem({
        timestamp: date,
        historyItemList: list,
      }).getElement(),
    );

    const $historyList = document.createElement('ul');
    $historyList.append(...historyItemList);

    return $historyList;
  }
}

export default HistoryList;
