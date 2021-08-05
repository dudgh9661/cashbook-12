import Component from '@lib/Component';
import { Layout, MonthChart, YearChart, HistoryList } from '@components';
import $ from '@utils/dom';

class ChartPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'chart-page' },
      new Layout({
        children: [
          new MonthChart(),
          new YearChart(),
          new HistoryList({
            type: 'simple',
          }),
        ],
      }),
    );
  }
}

export default ChartPage;
