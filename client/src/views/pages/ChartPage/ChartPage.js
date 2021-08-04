import Component from '@lib/Component';

import { Layout, MonthChart } from '@components';
import $ from '@utils/dom';
import './ChartPage.scss';

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
        children: [new MonthChart()],
      }),
    );
  }
}

export default ChartPage;
