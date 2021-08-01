import Component from '@lib/Component';
import { HistoryHeader, HistoryList } from '@components';
import './History.scss';

class History extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $history = document.createElement('div');
    $history.classList.add('history');

    console.log(HistoryList);
    $history.append(
      new HistoryHeader({}).getElement(),
      new HistoryList({}).getElement(),
    );

    return $history;
  }
}

export default History;
